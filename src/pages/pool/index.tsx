/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Button,
  Spacer,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Link from 'next/link';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { CgCloseO } from 'react-icons/cg';
import ReactModal from 'react-modal';

import { CustomRadio } from '../../components/CustomRadio';
import { Header } from '../../components/Header';
import Page from '../../components/page/Page';
import { useAuth } from '../../context/auth';
import { api } from '../../services/api';

const Pool: NextPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [cookie] = useCookies(['access_code']);
  const { responseData, loadData } = useAuth();
  const userConfirmed: any = [];
  const options = ['Pendente', 'Confirmado', 'Não comparecerá'];

  async function handleSubmit() {
    delete userConfirmed[-1];

    const response = await api.post(`/confirm/create/${cookie.access_code}`, {
      data: userConfirmed,
    });

    if (response.data.message === 'sucess') {
      loadData();
      setOpenModal(false);
    }
  }

  async function prepareUserConfirmed(
    userId: string,
    status: boolean | string
  ) {
    if (status === true || status === false) {
      const newUser = userConfirmed.filter((user: any) => user.id === userId);

      if (newUser.length === 0) {
        userConfirmed.push({ id: userId, status });
      } else {
        const i = userConfirmed.indexOf((user: any) => user.id === userId);
        newUser[0].status = status;
        userConfirmed[i] = newUser;
      }
    }
  }

  async function handleRadioChange(value: string, userId: string) {
    let status;

    if (value === 'Confirmado') {
      status = true;
    } else if (value === 'Não comparecerá') {
      status = false;
    } else {
      status = 'Pendente';
    }
    prepareUserConfirmed(userId, status);
  }

  useEffect(() => {
    if (!cookie.access_code) {
      Router.push('/access');
    }
  }, []);

  return (
    <Page title="Aleixo & Bruna - Pool party" description="Pool party">
      <Flex
        bg={
          'url(https://i.pinimg.com/originals/be/7f/a9/be7fa9dd634b9c765c8d48693d5b7803.jpg)'
        }
        direction={'column'}
        justify={'center'}
        align={'center'}
        width="full"
        height={'100%'}
        sx={{
          '@media(max-width: 768px)': {
            height: '100%',
          },
        }}
      >
        <Flex
          direction={'column'}
          justify={'center'}
          align={'center'}
          padding={'0 1.4rem'}
          bg={'white'}
          boxShadow={'0px 0px 15px 1px rgba(0,0,0,0.4)'}
          width={'90%'}
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
                Olá, Amados! Resolvemos oficializar nossa união e gostaríamos da
                sua presença nesse dia. Sabemos que está em cima da hora, mas
                não queríamos deixar passar em branco esse dia tão especial.
                Será uma festa simples, mas preparada com muito carinho e
                queremos estar rodeados de pessoas importantes.
              </Text>
            </Box>

            <Spacer p="2" />

            <Flex direction={'column'} justify={'center'} align={'center'}>
              <Image src={'poolparty.png'} />
            </Flex>

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
                width={'80px'}
                src="coco.png"
                position="absolute"
                top="-20px"
                right="-30px"
                transform={'rotate(20deg)'}
                sx={{
                  '@media(max-width: 768px)': {
                    right: '-20px',
                  },
                }}
              />

              <Text color={'purple.600'}>
                A festa será em uma chácara com piscinas, campo de futebol e
                parquinho para as crianças. Então venha com a roupa que se
                sentir confortável.
              </Text>
            </Box>

            <Spacer p="3" />

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
                src="sun.png"
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

              <Text color={'teal.300'}>
                Na passagem da gravata e sapatinho, teremos um sorteio com
                brinde.
              </Text>
            </Box>
          </Flex>

          <Spacer p="3" />

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
              <Text color={'red.600'}>
                Precisamos que a sua presença seja confirmada até dia
                21/03/2022, para que possamos nos organizar. Após esse prazo o
                link de confirmação não estará mais disponível.
              </Text>
            </Box>
          </Flex>
          <Spacer p="3" />
          <Button
            bg={'purple.300'}
            color={'white'}
            _hover={{ bg: 'purple.400' }}
            _active={{ bg: 'purple.400' }}
            _focus={{ boxShadow: 'var(--colors-purple-800)' }}
            onClick={() => setOpenModal(true)}
          >
            Confirmar presença
          </Button>

          <Spacer p="1" />
          <Link href="/">
            <a>Voltar ao convite</a>
          </Link>
          <Spacer p="3" />
          <ReactModal
            isOpen={openModal}
            style={{
              content: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '40rem',
                height: '40rem',
                margin: '0 auto',
                background: 'var(--chakra-colors-white)',
                boxShadow: '0px 0px 15px 1px rgba(0,0,0,0.4)',
                padding: '0 0.2rem',
                borderRadius: '1rem',
                overflowY: 'auto',
                overflowX: 'hidden',
              },
            }}
          >
            <Box position={'absolute'} right={'0'}>
              <Button
                p="0"
                onClick={() => setOpenModal(false)}
                bg={'none'}
                _hover={{ background: 'none', color: 'red' }}
                _focus={{ border: 'none', boxShadow: 'none' }}
                _active={{ border: 'none', boxShadow: 'none' }}
              >
                <CgCloseO />
              </Button>
            </Box>

            <Flex
              direction={'column'}
              padding={'2rem 0.5rem'}
              justify={'center'}
              align={'center'}
            >
              <Heading fontSize={'3xl'} fontWeight={'600'}>
                Confirme sua presença
              </Heading>
              <Spacer p="2" />
              <Heading fontSize={'2xl'} fontWeight={'500'}>
                Convite
              </Heading>
              <Text id="familyName">{responseData?.name}</Text>
              <Spacer py="1" />
              <Heading fontSize={'2xl'} fontWeight={'500'}>
                Convidados
              </Heading>
              {responseData?.users?.map((user: any) => {
                return (
                  <Flex
                    justify={'center'}
                    align={'center'}
                    direction={'column'}
                    sx={{
                      '@media(max-width: 768px)': {},
                    }}
                    key={user.id}
                    border={'1px solid var(--chakra-colors-gray-100)'}
                    margin={'0.8rem 0'}
                    padding={'1rem'}
                    borderRadius={'1rem'}
                  >
                    <Text fontWeight={'semibold'} fontSize={'1xl'}>
                      {user.name}
                    </Text>
                    <Spacer py="1" />
                    <CustomRadio
                      options={options}
                      defaultValue={
                        user.isConfirmed === true
                          ? 'Confirmado'
                          : user.isConfirmed === false
                          ? 'Não comparecerá'
                          : 'Pendente'
                      }
                      onChange={(value) => handleRadioChange(value, user.id)}
                    />
                  </Flex>
                );
              })}

              <Button
                bg={'purple.300'}
                color={'white'}
                _hover={{ bg: 'purple.400' }}
                _active={{ bg: 'purple.400' }}
                _focus={{ boxShadow: 'var(--colors-purple-800)' }}
                height={'2rem'}
                onClick={() => handleSubmit()}
              >
                Enviar
              </Button>
            </Flex>
          </ReactModal>
        </Flex>
      </Flex>
    </Page>
  );
};

export default Pool;
