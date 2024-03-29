import { Button, ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

interface PaginationItemProps extends ChakraButtonProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
  onPrefetcPage: (page: number) => void;
}

export function PaginationItem({
  isCurrent = false,
  number,
  onPageChange,
  onPrefetcPage,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default',
        }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: 'gray.500',
      }}
      onClick={() => onPageChange(number)}
      onMouseEnter={() => onPrefetcPage(number)}
    >
      {number}
    </Button>
  );
}
