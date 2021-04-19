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
        <meta
          property="og:title"
          content="Automação residencial | Alivy | Transforme a sua casa em um lar inteligente!"
        />
        <title>
          Automação residencial | Alivy | Transforme a sua casa em um lar
          inteligente!
        </title>
        <meta
          property="og:description"
          content="Automação residencial, Áudio, Vídeo, Segurança e Infraestrutura. Temos tudo o que você precisa para ter uma Casa inteligente."
        />
        <meta
          name="description"
          content="Automação residencial, Áudio, Vídeo, Segurança e Infraestrutura. Temos tudo o que você precisa para ter uma Casa inteligente."
        />
        <meta property="og:url" content="www.alivyautomacao.com.br" />
        <meta
          name="keywords"
          content="automação residencial, áudio, vídeo, segurança, infraestrutura, casa inteligente"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index" />
        <meta name="googlebot" content="index" />
        <meta name="author" content="Matheus Oliveira" />
        <meta name="creator" content="Matheus Oliveira" />
        <meta name="publisher" content="Matheus Oliveira" />
        <link rel="icon" href="/logo.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
