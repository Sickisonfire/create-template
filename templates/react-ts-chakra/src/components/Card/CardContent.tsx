import React from 'react';

import { Text, Image, AspectRatio, Link } from '@chakra-ui/react';

interface Props {
  description: string;
  imageUrl: string;
}

export const CardContent: React.FC<Props> = ({ description, imageUrl }) => {
  return (
    <>
      <Link>
        <AspectRatio ratio={16 / 9}>
          <Image boxSize="full" src={imageUrl} />
        </AspectRatio>
      </Link>
      <Text noOfLines={3} px="4" fontSize="sm" lineHeight="6">
        {description}
      </Text>
    </>
  );
};
