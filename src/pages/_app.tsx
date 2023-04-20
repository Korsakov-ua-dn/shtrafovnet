import type { AppProps } from 'next/app';

import { createMirageServer } from '@/shared/api';
import { wrapper } from '@/store';
import '@/styles/globals.scss';
import { useEffect } from 'react';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.USE_MIRAGE_SERVER === 'true') {
      console.log('ATTENTION - Using mirage server')
      createMirageServer();
    }
  }, [])
  
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App);