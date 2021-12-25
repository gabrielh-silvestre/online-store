import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import store from '../src/store';

import { Header } from '../src/components/Header';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
