import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Spacer,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';

import logo from '../../../public/pool.svg';

export function Header() {
  return (
    <Flex justify={'center'} align={'center'}>
      <Box boxSize="">
        <Image src={logo} objectFit="cover" />
      </Box>
    </Flex>
  );
}
