import { CacheProvider } from '@emotion/react';
import { QueryClient } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { setConfiguration } from 'react-grid-system';
import { BREAKPOINTS } from 'ui-mui';
import { createEmotionCache } from 'utils-mui';

import { Navbar } from '../common/navigation/Navbar';
import { BrandingProvider } from '../common/themingAndStyling/BrandingProvider';

const clientSideEmotionCache = createEmotionCache();

const queryClient = new QueryClient();

setConfiguration({
  gutterWidth: 20,
  breakpoints: BREAKPOINTS,
  containerWidths: [400, 800, 1020, 1300, 1400, 1900],
});

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
