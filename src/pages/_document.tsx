/* eslint-disable class-methods-use-this */
import { ColorModeScript, theme } from '@chakra-ui/react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Convite casamento Aleixo e Bruna" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Aleixo e Bruna te convidam para nossa festa de casamento"
          />
          <meta
            property="og:image"
            content="https://lh3.googleusercontent.com/fIfVad3LnDtGcE9bitYZTf_O3nQwHE2opQ0QnFE5kyqmmGrRAHtZ5wsLGSprBml_IUCT0BWvMmJH2XY-cha6If4XnKK032aALnwu_1NOYUn0QFPWRLBh4aCjSuStbIY2IT19TRG5c7_hOicpiLUP7VThzA2Px2huapjIKuJvS4Q1YcXJi6iFDPyRsy7A0kXdrfl9qeDDcCXXTte6iHRKPFY5ZyDsEUZBARsL0ACXFPjOQFY-iRmXy55rnakoFDpqwo0wSIvJHdI1n1vtPskfQd7wFqcy0HnBCLVpmJIgMSaWeIYg1qlHInrfiKscEsCX0JVn1beBB0INmjl_OR1lQ7q9-mppcFJSWtyzPE52BAoXz9e4dQszJVTXtdgfFk9-N-tyKHyg3H4TJl8artitLnpKD_aeFWCa10u5hdpfAzILzpywuqbm8eI13hu5pyYUkEIF-b4UC1m2mf17e_oG5bt87z9CHyxQwSdsggdAdNv6LG_zTnYyBJiwqO9udHgHqNE3-g2XXiQy95D1Qq8kWYtjwgNnFkMllcxU_OR5Q0NBI0pbaFDjsXtMOo6sNawl6H5Pkk7co_kaA69QG6wXMdo2L7UgP0tuBe0uIoIn8URjtu2Iwx8NmGACDS3ifE6nAyDEhNAB9qoRVLjLU5kYSfrd4122keMAyOZrwkUGjCcYfCr-P3GRKcrzQjD3rsuKXtKT_tvGz5KdnRXMfFjbZ9W2=w733-h979-no?authuser=0"
          />
          <meta property="og:image:alt" content="Aleixo e Bruna" />
          <meta property="og:image:width" content="1280" />
          <meta property="og:image:heigth" content="720" />
          <meta property="og:locale" content="pt_BR" />

          <link rel="shortcut icon" href="/favicon.jpg" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <link
            href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
