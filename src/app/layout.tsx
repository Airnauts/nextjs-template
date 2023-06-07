import { ArAppContextProvider } from 'contexts/ArAppContext';
import { Metadata } from 'next';
import React from 'react';

type HomepageLayoutProps = React.PropsWithChildren<{}>;

export const metadata: Metadata = {
  title: {
    template: '%s | Acme',
    default: 'Acme',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
  },
};

export default function HomepageLayout({ children }: HomepageLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ArAppContextProvider
          initialState={{
            count: 0,
          }}
        >
          <main>{children}</main>
        </ArAppContextProvider>
      </body>
    </html>
  );
}
