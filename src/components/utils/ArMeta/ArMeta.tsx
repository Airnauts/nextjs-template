import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { APP_CONFIG } from 'config/app-config';
import { ArMetaProps } from './ArMeta.types';

export function ArMeta(props: ArMetaProps) {
  const router = useRouter();

  const { title, description, canonical, openGraph, ...rest } = props;

  return (
    <>
      <Head>
        <meta
          charSet="UTF-8"
          key="charset"
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.png`}
          key="favicon"
        />
      </Head>

      <NextSeo
        {...rest}
        title={title}
        titleTemplate={`%s | ${APP_CONFIG.site_name}`}
        description={description}
        canonical={canonical}
        openGraph={{
          ...openGraph,
          title: openGraph?.title || title,
          description: openGraph?.description || description,
          url: openGraph?.url || canonical,
          images: openGraph?.images,
          locale: openGraph?.locale || APP_CONFIG.locale || 'en_US',
          siteName: openGraph?.siteName || APP_CONFIG.site_name || '',
        }}
      />
    </>
  );
}
