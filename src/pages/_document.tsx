import { APP_CONFIG } from 'config/app-config';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang={APP_CONFIG.locale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
