import {
  Flex,
  Image,
  Box,
  Spacer,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';

const Home: NextPage = () => {
  return (
    <Flex justify={'center'} align={'center'} direction={'column'} width="full">
      <Box>
        <Image
          src={'nos.jpg'}
          objectFit={'cover'}
          boxSize="15rem"
          borderRadius="full"
        />
      </Box>

      {/* <Image
          src={'nome.svg'}
          objectFit={'cover'}
          maxW={'20rem'}
          maxH={'15rem'}
        /> */}
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
        <Link href={'/pool'}>
          <Button>Confirmar presença</Button>
        </Link>
        <Button>Lista de presentes</Button>
      </Flex>
    </Flex>
  );
};

export default Home;
