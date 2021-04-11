import { ChakraProvider } from '@chakra-ui/react';

import { AppProps } from 'next/app';
import Head from 'next/head';

import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
       
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
