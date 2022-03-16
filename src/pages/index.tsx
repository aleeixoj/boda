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

const Home: NextPage = () => {
  return (
    <Flex
      justify={'center'}
      align={'center'}
      direction={'column'}
      width="full"
      height={'100vh'}
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
            src={
              'https://lh3.googleusercontent.com/fIfVad3LnDtGcE9bitYZTf_O3nQwHE2opQ0QnFE5kyqmmGrRAHtZ5wsLGSprBml_IUCT0BWvMmJH2XY-cha6If4XnKK032aALnwu_1NOYUn0QFPWRLBh4aCjSuStbIY2IT19TRG5c7_hOicpiLUP7VThzA2Px2huapjIKuJvS4Q1YcXJi6iFDPyRsy7A0kXdrfl9qeDDcCXXTte6iHRKPFY5ZyDsEUZBARsL0ACXFPjOQFY-iRmXy55rnakoFDpqwo0wSIvJHdI1n1vtPskfQd7wFqcy0HnBCLVpmJIgMSaWeIYg1qlHInrfiKscEsCX0JVn1beBB0INmjl_OR1lQ7q9-mppcFJSWtyzPE52BAoXz9e4dQszJVTXtdgfFk9-N-tyKHyg3H4TJl8artitLnpKD_aeFWCa10u5hdpfAzILzpywuqbm8eI13hu5pyYUkEIF-b4UC1m2mf17e_oG5bt87z9CHyxQwSdsggdAdNv6LG_zTnYyBJiwqO9udHgHqNE3-g2XXiQy95D1Qq8kWYtjwgNnFkMllcxU_OR5Q0NBI0pbaFDjsXtMOo6sNawl6H5Pkk7co_kaA69QG6wXMdo2L7UgP0tuBe0uIoIn8URjtu2Iwx8NmGACDS3ifE6nAyDEhNAB9qoRVLjLU5kYSfrd4122keMAyOZrwkUGjCcYfCr-P3GRKcrzQjD3rsuKXtKT_tvGz5KdnRXMfFjbZ9W2=w733-h979-no?authuser=0'
            }
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
          <Box textAlign={'center'}>
            <Spacer p="1.5" />
            <Text
              sx={{
                '@media(max-width: 768px)': { fontSize: '0.9rem' },
              }}
            >
              “Acima de tudo, porém, revistam-se do amor, que é o elo perfeito.”
              – Colossenses 3:14
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
            <Text>apartir das 10:00 AM</Text>
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
        <Flex justify="center" align="center" direction={'column'} gap={'1rem'}>
          <Button
            bg={'purple.300'}
            color={'white'}
            _hover={{ bg: 'purple.400' }}
            _active={{ bg: 'purple.400' }}
            _focus={{ boxShadow: 'var(--colors-purple-800)' }}
          >
            <Link href={'/access'}>
              <a rel="noreferrer">Confirmar presença</a>
            </Link>
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
        <Spacer p="10" />
      </Box>
    </Flex>
  );
};

export default Home;
