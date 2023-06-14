import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Test = () => {
  return (
    <Box p={4} bg="gray.200">
      <Heading as="h2" size="lg">
        Título del componente
      </Heading>
      <Text mt={2}>
        Este es un ejemplo de componente creado con Chakra UI.
      </Text>
    </Box>
  );
};

export default Test;