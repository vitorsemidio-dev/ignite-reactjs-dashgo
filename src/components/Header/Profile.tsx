import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Vitor Emidio</Text>
        <Text color="gray.300" fontSize="small">
          vitoremidio@email.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Vitor Emidio"
        src="https://github.com/vitorsemidio-dev.png"
      />
    </Flex>
  );
}
