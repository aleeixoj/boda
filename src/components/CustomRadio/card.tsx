/* eslint-disable no-nested-ternary */
import { Box, RadioProps, useRadio } from '@chakra-ui/react';

function RadioCard(props: RadioProps) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderRadius="md"
        boxShadow="lg"
        _checked={{
          bg:
            props.value === 'Confirmado'
              ? 'green.500'
              : props.value === 'Não comparecerá'
              ? 'red.500'
              : 'purple.600',

          color: 'white',
          fontWeight: 'semibold',
        }}
        borderColor={'gray.100'}
        marginTop={'5px'}
        _focus={{
          boxShadow: 'none',
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export { RadioCard };
