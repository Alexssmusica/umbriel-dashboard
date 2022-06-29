import { Button as ChakraButton, ButtonProps as ChakraButtonProps, forwardRef } from '@chakra-ui/react';
import React from 'react';

type ButtonProps = ChakraButtonProps

export const Button = forwardRef<ButtonProps, 'button'>(({ children, ...rest }, ref) => {
  return (
    <ChakraButton 
      color="white" 
      fontSize="md"
      size="lg"
      ref={ref}
      colorScheme="purple"
      {...rest}
    >
      {children}
    </ChakraButton>
  );
})



