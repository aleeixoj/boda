import { Box, Flex, Heading, Spacer, Text, Image } from '@chakra-ui/react';
import { Form } from '@unform/web';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Router from 'next/router';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

import flag from '../../../public/flag.svg';
import { Header } from '../../components/Header';
import { Input } from '../../components/input';

const Pool: NextPage = () => {
  const [useCode] = useCookies(['access_code']);

  useEffect(() => {
    if (!useCode.access_code || useCode.access_code.length < 1) {
      Router.push('/alert');
    }
  }, []);

  return (
    <Flex
      bg={
        'url(https://png.pngtree.com/background/20210710/original/pngtree-blue-cool-summer-pool-party-with-watermark-blue-background-picture-image_990627.jpg)'
      }
      direction={'column'}
      justify={'center'}
      align={'center'}
      width="full"
      height={'100vh'}
    >
      <Flex
        direction={'column'}
        justify={'center'}
        align={'center'}
        padding={'0 1.4rem'}
        bg={'gray.50'}
        boxSize={'90%'}
        boxShadow={'0px 0px 15px 1px rgba(0,0,0,0.4)'}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 460,
            damping: 20,
          }}
        >
          <Header />
        </motion.div>
        <Flex dir="column" justify={'center'} align="center">
          <motion.div
            animate={{ scale: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <Image src="flag.svg" />
          </motion.div>
        </Flex>

        <Box p="3">
          <Heading size={'md'}> E venha para nossa Pool party!</Heading>
        </Box>

        <Flex direction={'column'}>
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
              Olá, amados! Resolvemos oficializar nossa união. Sabemos que está
              bem em cima da hora, mas será uma festa simples.
            </Text>
          </Box>
          <Spacer p="5" />
          <Box>
            <Form onSubmit={() => {}}>
              <Input type={'text'} name={'nome'} />
            </Form>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Pool;
