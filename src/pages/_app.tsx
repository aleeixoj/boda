import '../styles/globals.scss';
import { Box, Center, ChakraProvider, Flex } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { CookiesProvider } from 'react-cookie';

import { Header } from '../components/Header';
import style from '../styles/home.module.scss';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <ChakraProvider theme={theme}>
        {/* <Header /> */}
        <div className={style.container}>
          <Component {...pageProps} />
        </div>
      </ChakraProvider>
    </CookiesProvider>
  );
}

export default MyApp;
