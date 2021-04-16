import { ChakraProvider } from '@chakra-ui/react';

import { AppProps } from 'next/app';
import Head from 'next/head';

import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <meta charSet="UTF-8" />
        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="Alivy" />
        <meta property="og:title" content="Alivy" />
        <title>Alivy</title>

        <meta property="og:description" content="" />
        <meta name="description" content="" />

        <meta property="og:url" content="" />
        <meta name="keywords" content="" />
        <meta name="google-site-verification" content="" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="robots" content="index" />
        <meta name="googlebot" content="index" />
        <meta name="author" content="Matheus Oliveira" />
        <meta name="creator" content="Matheus Oliveira" />
        <meta name="publisher" content="Matheus Oliveira" />

        <link rel="icon" href="/logo.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
