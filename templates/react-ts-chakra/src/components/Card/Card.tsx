import React from 'react';
import { Stack, useColorModeValue } from '@chakra-ui/react';

export const Card: React.FC = ({ children }) => {
  return (
    <Stack
      pb="4"
      pt="2"
      direction="column"
      spacing="3"
      bg={useColorModeValue('white', 'gray.900')}
      rounded="md"
      shadow="md"
      maxH="xl"
      border={useColorModeValue('none', '1px solid')}
      borderColor={useColorModeValue('none', 'gray.700')}
    >
      {children}
    </Stack>
  );
};
