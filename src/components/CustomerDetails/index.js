import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react';

function CustomerDetails() {
  return (
    <div>
      CustomerDetails
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>We never share your email.</FormHelperText>
      </FormControl>
    </div>
  );
}

export default CustomerDetails;
