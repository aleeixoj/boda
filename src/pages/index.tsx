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
import { useEffect } from 'react';
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
              src={
                'https://lh3.googleusercontent.com/EobSKBkhU9IIiTyR4V2I3EdeTpM9mBnop66mnKkFgib2LvyadPeDBPgjGZ8jCja8svqWnPFI7eeLGU84ayd9oIsdYRiFtBQgx0EeVo73uuoGKS8n-8ocnuc-DvcDCaRYNVUCsGpUFI5IfmEqyl7tfKOpIem3qAoLW1E9j1PY2vBrRHYVpoDO61R_X5ZmSbUPVI3z9oWX751lei0DZ33t6UlbMYPmFqj0s24zcYj42ZJ6hi6mVB0rGjFVTd2evZIAXY7xRu1nFDzmd4rpbBwtxVc5cBmiSBLojypi3kd28IQFTL_bKLnStPHgOjHFOz0gOwt2B7Y_95WiQicdNmuxB4Am9xByWiBkLrttIC2iVuGrkeuVpwUtVTpXHQ506EvwKd2YT0FZa2BlCON6-R2EKDG9G90dCdcONxrOOoKWO5pfVPScnNbj5WybZiAnFb-3gz7Q6FAsnpYGjz4Ug_fy0Frk86RgRkFpbWbFOPOYn2jgniBL6p8s8mfGonZSfwNaAsg_c2d5ZTuAXzR7HT3IufI4xlTZ8dZGKQfRDXqW-nLz4SzE3RQrWU2M4-xluJvwVI4ZyxLLNm0NkOqdfP84TWohf7ZKeYBj-cE8qgke5A_V2OHbmkVHadxazf5ZJzmLsvw3NX2Jv-uDLP34kYsVe-_FeXNon-uPN66PBew5e6kdmzCNAG1i_umg410fkvmE49LzlsoT6QnbakbVbWByMDyk=w999-h980-no?authuser=0'
              }
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
              <Text>apartir das 11:00 AM</Text>
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
              <Button
                bg={'green.300'}
                color={'white'}
                _hover={{ bg: 'green.400' }}
                _active={{ bg: 'green.400' }}
                _focus={{ boxShadow: 'var(--colors-green-800)' }}
              >
                <a target="_blank" rel="noreferrer">
                  Lista de presentes
                </a>
              </Button>
            </Link>
          </Flex>
          <Spacer p="10" />
        </Box>
      </Flex>
    </Page>
  );
};

export default Home;
