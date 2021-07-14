import React from 'react';

import { Button, Flex, Spacer, Text } from '@chakra-ui/react';

import { MdShoppingCart, MdKeyboardArrowRight } from 'react-icons/md';

interface Props {}

export const CardFooter: React.FC<Props> = (props) => {
  return (
    <Flex px="4" pt="5">
      <Button
        as="a"
        className="button"
        variant="ghost"
        colorScheme="blue"
        iconSpacing="3"
        size="sm"
        rightIcon={<MdKeyboardArrowRight />}
        textTransform="uppercase"
        fontSize="xs"
        rounded="full"
        onClick={(e) => {
          e.preventDefault();
          alert('clicked');
        }}
      >
        <Text
          transition="all 500ms cubic-bezier(.41,-0.16,0,1.76)"
          sx={{
            '.button:hover &': {
              marginRight: '8px',
            },
          }}
        >
          Learn more
        </Text>
      </Button>
      <Spacer />
      <Button
        variant="solid"
        colorScheme="blue"
        size="sm"
        rounded="2xl"
        rightIcon={<MdShoppingCart />}
      >
        Add to cart
      </Button>
    </Flex>
  );
};
