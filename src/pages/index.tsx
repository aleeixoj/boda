import {
  Flex,
  Image,
  Box,
  Spacer,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';

import Page from '../components/page/Page';

const Home: NextPage = () => {
  return (
    <Page title="Aleixo & Bruna" description="Aleixo e Bruna te convidam">
      <Flex
        justify={'center'}
        align={'center'}
        direction={'column'}
        width="full"
        sx={{
          '@media(min-width: 720px)': {
            height: '100vh',
          },
        }}
        bg={
          'url(https://i.pinimg.com/originals/b2/ae/21/b2ae21987249aeb22ef94dc7c0f8870c.jpg)'
        }
      >
        <Box
          bg={'white'}
          boxSize={'90%'}
          boxShadow={'0px 0px 15px 1px rgba(0,0,0,0.4)'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
          padding={'1rem 0'}
        // margin={'1rem'}
        >
          <motion.div
            initial={{ rotate: 180, scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            <Image
              src={'/foto.jpg'}
              objectFit={'cover'}
              boxSize="15rem"
              borderRadius="full"
              alt="Aleixo e Bruna"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            <Box textAlign={'center'}>
              <Spacer p="1.5" />
              <Text
                sx={{
                  '@media(max-width: 768px)': { fontSize: '0.9rem' },
                }}
              >
                “Acima de tudo, porém, revistam-se do amor, que é o elo
                perfeito.” – Colossenses 3:14
              </Text>

              <Spacer p="1.5" />
              <Heading
                fontFamily="Great Vibes"
                fontWeight={'300'}
                fontSize={'7xl'}
              >
                Aleixo e Bruna
              </Heading>
              <Text>Convidam para sua festa de casamento</Text>
              <Text>que será realizado no dia</Text>
              <Spacer p="3" />
              <Heading
                fontFamily="Great Vibes"
                fontWeight={'300'}
                fontSize={'5xl'}
              >
                28 de maio de 2022
              </Heading>

              <Spacer p="2" />
              <Heading fontSize={'2xl'}>Local:</Heading>
              <Text>Rua Leonardo Difert, 157</Text>
              <Text>São José dos Pinhais - PR</Text>
            </Box>
          </motion.div>
          <Spacer p="5" />
          <Flex
            justify="center"
            align="center"
            bg="gray.200"
            width={'full'}
            height={'1px'}
          >
            <BsHeartFill color="red" />
          </Flex>
          <Spacer p="5" />
          <Flex
            justify="center"
            align="center"
            direction={'column'}
            gap={'1rem'}
          >
            <Flex
              justify="center"
              align="center"
              direction={'column'}
              borderRadius="0.75rem"
              background={'gray.50'}
              width={'20rem'}
              height={'4rem'}
              boxShadow={'0px 0px 10px -5px #000000'}
            >
              <Text>O evento terá início às 11:00 AM</Text>
              <Text>O Buffet será servido às 12:20 PM</Text>
            </Flex>
            <Button
              height="4rem"
              fontSize="1.2rem"
              bg={'green.300'}
              color={'white'}
              _hover={{ bg: 'green.400' }}
              _active={{ bg: 'green.400' }}
              _focus={{ boxShadow: 'var(--colors-green-800)' }}
            >
              <Link
                href={
                  'https://www.querodecasamento.com.br/lista-de-casamento/aleixok-brunasa'
                }
              >
                <a target="_blank" rel="noreferrer">
                  Lista de presentes
                </a>
              </Link>
            </Button>
          </Flex>
          <Spacer p="10" />
        </Box>
      </Flex>
    </Page>
  );
};

export default Home;
