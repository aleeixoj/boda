import { Flex, Text, Spacer, Button } from '@chakra-ui/react';
import { Form } from '@unform/web';
import { NextPage } from 'next';
import Router from 'next/router';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

import { Input } from '../../components/input';
import { useAuth } from '../../context/auth';

const Access: NextPage = () => {
  const [cookie, setCookie] = useCookies(['access_code']);
  const { signIn, loginError } = useAuth();
  async function handleGet(requestData: any) {
    signIn(requestData);
  }

  useEffect(() => {
    if (cookie.access_code) {
      Router.push('/pool');
    }
  }, []);

  return (
    <Flex
      justify={'center'}
      align={'center'}
      direction={'column'}
      p="2"
      height={'100vh'}
    >
      <Form onSubmit={(requestData: any) => handleGet(requestData)}>
        <Flex justify={'center'} align={'center'} direction={'column'} p="2">
          <Text>Digite seu código de acesso para continuar</Text>
          <Spacer p="2" />
          <Input
            name="access_code"
            label={'Codigo de acesso'}
            error={loginError}
          />
          <Button
            bg={'purple.300'}
            color={'white'}
            _hover={{ bg: 'purple.400' }}
            _active={{ bg: 'purple.400' }}
            _focus={{ boxShadow: 'var(--colors-purple-800)' }}
            type="submit"
          >
            Enviar
          </Button>
        </Flex>
      </Form>
    </Flex>
  );
};

export default Access;
