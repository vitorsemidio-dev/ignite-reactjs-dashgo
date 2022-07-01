import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Vitor Emidio</Text>
          <Text color="gray.300" fontSize="small">
            vitoremidio@email.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Vitor Emidio"
        src="https://github.com/vitorsemidio-dev.png"
      />
    </Flex>
  );
}
