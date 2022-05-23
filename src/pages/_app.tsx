import '../styles/globals.scss';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { CookiesProvider } from 'react-cookie';
import Modal from 'react-modal';

import { AuthProvider } from '../context/auth';
import style from '../styles/home.module.scss';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  Modal.setAppElement('#__next');
  return (
    <CookiesProvider>
      <AuthProvider>
        <ChakraProvider theme={theme}>
          {/* <Header /> */}
          <div className={style.container}>
            <Component {...pageProps} />
          </div>
        </ChakraProvider>
      </AuthProvider>
    </CookiesProvider>
  );
}

export default MyApp;
