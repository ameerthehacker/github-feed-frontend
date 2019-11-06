import React from 'react';
import { Button, Flex, Box } from '@chakra-ui/core';

const LoginPage = () => (
  <Flex justify={'center'} align={'center'} h={'100vh'}>
    <Box>
      <h3 className="text-center">Login</h3>
      <Button size={'lg'} variantColor={'pink'}>
        Get public feed
      </Button>
    </Box>
  </Flex>
);

export default LoginPage;
