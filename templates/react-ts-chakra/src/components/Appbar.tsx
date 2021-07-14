import React from 'react';
import {
  Button,
  Flex,
  Heading,
  Spacer,
  HStack,
  useColorMode,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';

import { FaSun, FaMoon } from 'react-icons/fa';

export const Appbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      p="3"
      bg={useColorModeValue('gray.200', 'gray.900')}
      align="center"
      borderBottom={useColorModeValue('none', '1px solid')}
      borderColor={useColorModeValue('none', 'gray.700')}
    >
      <Heading size="md">Page title</Heading>
      <Spacer />
      <HStack>
        <IconButton
          size="sm"
          fontSize="lg"
          mr="10"
          aria-label="change colormode"
          variant="ghost"
          colorScheme="blue"
          rounded="full"
          icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
        />

        <Button mr="2" size="sm" colorScheme="blue" rounded="full">
          Sign Up
        </Button>
        <Button size="sm" variant="outline" colorScheme="blue" rounded="full">
          Log in
        </Button>
      </HStack>
    </Flex>
  );
};
