import React from 'react';
import {
  Button,
  Flex,
  Box,
  FormControl,
  Input,
  FormHelperText,
  Text
} from '@chakra-ui/core';

const LoginPage = () => (
  <Flex justify={'center'} align={'center'} h={'100vh'}>
    <Box width={['100%', '60%', '35%', '25%']}>
      <h3 className="text-center">Login</h3>
      <FormControl>
        <Input placeholder={'GitHub Username'} />
        <FormHelperText id="email-helper-text">
          This will get only your public feed.
        </FormHelperText>
      </FormControl>
      <Button
        width={'100%'}
        size={'lg'}
        variant={'outline'}
        variantColor={'pink'}
      >
        Get public feed
      </Button>
      <Text textAlign={'center'}>(OR)</Text>
      <Button
        leftIcon="unlock"
        width={'100%'}
        size={'lg'}
        variant={'outline'}
        variantColor={'teal'}
      >
        Login with GitHub
      </Button>
    </Box>
  </Flex>
);

export default LoginPage;
