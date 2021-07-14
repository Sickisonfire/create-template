import React from 'react';

import {
  Box,
  Flex,
  Spacer,
  Avatar,
  Text,
  IconButton,
  Heading,
  Link,
} from '@chakra-ui/react';

import { MdShare } from 'react-icons/md';

interface Props {
  title: string;
  price: number;
}

export const CardHeader: React.FC<Props> = ({ title, price }) => {
  return (
    <Flex align="center" px="2" pt="2">
      <Avatar />
      <Box ml="5">
        <Link>
          <Heading fontSize="md" noOfLines={2}>
            {title}
          </Heading>
        </Link>
        <Text
          fontSize="base"
          fontWeight="bold"
          mt="2"
        >{`$${price.toString()}`}</Text>
      </Box>
      <Spacer />
      <IconButton
        fontSize="xl"
        icon={<MdShare />}
        aria-label="Share product"
        variant="ghost"
        colorScheme="blue"
        rounded="full"
      />
    </Flex>
  );
};
