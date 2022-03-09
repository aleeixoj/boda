import { Box, Flex, Heading, Spacer, Text, Image } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Router from 'next/router';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

import flag from '../../../public/flag.svg';
import { Header } from '../../components/Header';

const Pool: NextPage = () => {
  const [useCode] = useCookies(['access_code']);

  useEffect(() => {
    if (!useCode.access_code || useCode.access_code.length < 1) {
      Router.push('/alert');
    }
  }, []);

  return (
    <Flex
      direction={'column'}
      justify={'center'}
      align={'center'}
      padding={'1.4rem'}
    >
      <Flex dir="column" justify={'center'} align="center">
        <Header />
      </Flex>
      <Spacer />
      <Box p="3">
        <Heading size={'md'}> E venha para nossa Pool party!</Heading>
      </Box>
      <Spacer />

      <Flex>
        <Box
          bg={'white'}
          p="2"
          boxShadow={'md'}
          rounded="md"
          maxW={'50rem'}
          maxH={'auto'}
          position="relative"
        >
          <Image
            width={50}
            src="pineapple.png"
            position="absolute"
            bottom="-20px"
            left="-30px"
            transform={'rotate(-20deg)'}
            sx={{
              '@media(max-width: 768px)': {
                left: '-20px',
              },
            }}
          />

          <Text color={'cyan.600'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            voluptatibus voluptate earum ducimus sapiente voluptates consectetur
            molestiae ratione, iusto, placeat, sunt officia? Nihil velit
            delectus consectetur inventore. Rerum, provident possimus!
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Pool;
