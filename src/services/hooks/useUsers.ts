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

export async function getUsers(): Promise<User[]> {
  const response = await api.get<UserResponse>('users');
  const data = response.data;

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

  return users;
}

export function useUsers() {
  return useQuery<User[]>('users', getUsers, {
    staleTime: 5 * 1000,
  });
}
