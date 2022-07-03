import { useQuery } from 'react-query';
import { api } from '../api';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type UserResponse = {
  users: User[];
};

type GetUserResponse = {
  totalCount: number;
  users: User[];
};

export async function getUsers(page: number): Promise<GetUserResponse> {
  const { data, headers } = await api.get<UserResponse>('users', {
    params: {
      page,
    },
  });

  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-br', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    };
  });

  const totalCount = Number(headers['x-total-count']);

  return { totalCount, users };
}

export function useUsers(page: number) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 10 * 60 * 1000, // 10 minutos
  });
}
