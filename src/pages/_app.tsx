import { useEffect } from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import { createMirageServer } from '@/shared/api';
import { wrapper } from '@/store';
import '@/styles/globals.scss';

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  useEffect(() => {
    if (process.env.USE_MIRAGE_SERVER === 'true') {
      console.log('ATTENTION - Using mirage server')
      createMirageServer();
    }
  }, [])
  
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  )
}

export default App;
