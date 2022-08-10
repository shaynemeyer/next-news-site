import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Center } from '../components/Center';
import { GlobalStyle, theme } from '../shared/theme';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Head>
        <title>What&apos;s Next?!</title>
      </Head>

      <Header />
      <main className="main">
        <Center>
          <Component {...pageProps} />
        </Center>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
