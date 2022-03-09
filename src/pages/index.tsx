import {
  Flex,
  Image,
  Box,
  Spacer,
  Heading,
  Text,
  Button,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Link from 'next/link';
import Router from 'next/router';
import { useCookies } from 'react-cookie';
import { BsHeartFill } from 'react-icons/bs';

const Home: NextPage = () => {
  const [useCode] = useCookies(['access_code']);

  async function checkNextPage() {
    if (!useCode.access_code || useCode.access_code.length < 1) {
      Router.push('/alert');
    } else {
      Router.push('/pool');
    }
  }
  return (
    <Flex justify={'center'} align={'center'} direction={'column'} width="full">
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
          src={'nos.jpg'}
          objectFit={'cover'}
          boxSize="15rem"
          borderRadius="full"
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
        <Heading
          textAlign={'center'}
          fontFamily="Great Vibes"
          fontWeight={'300'}
          fontSize={'7xl'}
        >
          Aleixo e Bruna
        </Heading>

        <Text>Convidam para sua festa de casamento</Text>
        <Text>que sera realizado no dia</Text>
        <Spacer p="3" />
        <Heading fontFamily="Great Vibes" fontWeight={'300'} fontSize={'5xl'}>
          28 de maio de 2022
        </Heading>
        <Text>apartir das 10:00 AM</Text>
        <Spacer p="2" />
        <Heading fontSize={'2xl'}>Local:</Heading>
        <Text>Rua Leonardo Difert, 157</Text>
        <Text>São José dos Pinhais - PR</Text>
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
      <Flex justify="center" align="center" direction={'column'} gap={'1rem'}>
        <Button
          bg={'purple.300'}
          color={'white'}
          _hover={{ bg: 'purple.400' }}
          _active={{ bg: 'purple.400' }}
          _focus={{ boxShadow: 'var(--colors-purple-800)' }}
          onClick={checkNextPage}
        >
          Confirmar presença
        </Button>
        <Link
          href={
            'https://www.querodecasamento.com.br/lista-de-casamento/aleixok-brunasa'
          }
        >
          <a target="_blank" rel="noreferrer">
            Lista de presentes
          </a>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Home;
