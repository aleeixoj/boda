import { Box, Button, Flex, Heading, Spacer, Text } from '@chakra-ui/react';
import { Form } from '@unform/web';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { IoWarning } from 'react-icons/io5';

import { Input } from '../../components/input';

interface IDataTypes {
  access_code: string;
}

const Alert: NextPage = () => {
  const userCodes = ['aleixo', 'bruna', 'andre'];

  const [cookie, setCookie] = useCookies(['access_code']);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!cookie.access_code || cookie.access_code.length < 1) {
      Router.push('/alert');
    } else {
      Router.push('/pool');
    }
  }, []);

  async function onError(value: string) {
    return setError(value);
  }

  async function handleSubmit({ access_code }: IDataTypes) {
    console.log(access_code);

    const exists = userCodes.some((userCode: string) => {
      return access_code === userCode;
    });

    if (exists) {
      setCookie('access_code', access_code);
      Router.push('/pool');
    } else {
      onError('Código de acesso inválido!');
    }
  }

  return (
    <Flex
      justify={'center'}
      align={'center'}
      height={'100vh'}
      direction={'column'}
    >
      <motion.div
        animate={{ scale: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <IoWarning
          style={{
            width: '15rem',
            height: '15rem',
            color: 'var(--chakra-colors-yellow-400)',
          }}
        />
      </motion.div>
      {/* <Spacer p="2" /> */}
      <Box
        justifyContent={'center'}
        alignItems={'center'}
        display={'flex'}
        flexDirection={'column'}
        textAlign={'center'}
      >
        <Heading fontSize={'4xl'}>Atenção!</Heading>
        <Text fontSize={'2xl'}>O conteúdo que você está acessando</Text>
        <Text fontSize={'2xl'}>é estritamente proibido</Text>
        <Text fontSize={'2xl'}>digite seu codigo secreto para continuar!</Text>
      </Box>
      <Box margin={'2rem'}>
        <Form onSubmit={handleSubmit}>
          <Box
            justifyContent={'center'}
            alignItems={'center'}
            display={'flex'}
            flexDirection={'column'}
            textAlign={'center'}
          >
            <Input name="access_code" label="Código de acesso" error={error} />
            <Button
              bg={'green.300'}
              color={'white'}
              _hover={{ bg: 'green.400' }}
              _active={{ bg: 'green.400' }}
              _focus={{ boxShadow: 'var(--colors-green-800)' }}
              type="submit"
            >
              Confirmar
            </Button>
          </Box>
        </Form>
      </Box>
    </Flex>
  );
};

export default Alert;
