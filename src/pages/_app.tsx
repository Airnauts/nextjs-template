import 'styles/globals.css';

import { ArLayout } from 'components/layouts/ArLayout';

const MyApp = function MyApp({ Component, pageProps }) {
  return (
    <ArLayout>
      <Component {...pageProps} />
    </ArLayout>
  );
};

export default MyApp;
