import '../styles/globals.scss';
import { Box, Center, ChakraProvider, Flex } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import { Header } from '../components/Header';
import style from '../styles/home.module.scss';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      {/* <Header /> */}
      <div className={style.container}>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
