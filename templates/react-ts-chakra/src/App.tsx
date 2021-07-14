import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import {
  Box,
  Container,
  SimpleGrid,
  Skeleton,
  useColorModeValue,
} from '@chakra-ui/react';

import { Card, CardContent, CardFooter, CardHeader } from './components/Card';
import { Appbar } from './components/Appbar';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const fetchProducts = async (): Promise<Product[]> =>
  await (await fetch('https://fakestoreapi.com/products/')).json();

const App: React.FC = () => {
  const { data, isLoading, error } = useQuery<Product[]>(
    'products',
    fetchProducts
  );
  // if (isLoading) return <div>loading</div>;
  // if (error) return <div>error</div>;
  const bg = useColorModeValue('gray.100', 'gray.900');
  return (
    <Box bg={bg}>
      <Appbar />
      <Container maxW={['full', 'md', '6xl']} mt="10">
        <SimpleGrid columns={[1, 1, 2, 3, 3]} spacingX={4} spacingY={4}>
          {!isLoading &&
            data!.map(({ id, title, price, description, image }) => (
              <Card key={id}>
                <CardHeader title={title} price={price} />
                <CardContent description={description} imageUrl={image} />
                <CardFooter />
              </Card>
            ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default App;
