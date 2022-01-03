import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import store from '../src/store';
import { Toaster } from 'react-hot-toast';

import { Header } from '../src/components/Header';
import NextNProgress from 'nextjs-progressbar';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextNProgress />
      <Header />
      <Component {...pageProps} />
      <Toaster />
    </Provider>
  );
}

export default MyApp;
