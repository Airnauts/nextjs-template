import 'styles/globals.css';

import { ArLayout } from 'components/layouts/ArLayout';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ArLayout>
      <Component {...pageProps} />
    </ArLayout>
  );
}

export default MyApp;
