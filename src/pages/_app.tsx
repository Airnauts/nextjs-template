import "styles/globals.css";

import { ArLayout } from "components/layouts/ArLayout";

function MyApp({ Component, pageProps }) {
  return (
    <ArLayout>
        <Component {...pageProps} />
    </ArLayout>
  );
}

export default MyApp;
