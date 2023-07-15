import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline, Box, Typography } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { createEmotionCache } from 'utils-mui';

import { Navbar } from '../common/navigation/Navbar';
import { BrandingProvider } from '../common/themingAndStyling/BrandingProvider';

const clientSideEmotionCache = createEmotionCache();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>СМИ2</title>
        <meta name="description" content="СМИ2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CacheProvider value={clientSideEmotionCache}>
        <BrandingProvider>
          {
            <div>
              <Navbar />
              <Component {...pageProps} />
            </div>
          }
        </BrandingProvider>
      </CacheProvider>
    </>
  );
};

export default appWithTranslation(App);
