import 'styles/globals.css';

import { ArLayout } from 'components/layouts/ArLayout';
import { AppProps } from 'next/app';
import { ArAppContextProvider } from 'contexts/ArAppContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ArAppContextProvider
      initialState={{
        count: 0,
      }}
    >
      <ArLayout>
        <Component {...pageProps} />
      </ArLayout>
    </ArAppContextProvider>
  );
}

export default MyApp;
