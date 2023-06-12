import React from 'react';
import { ArWelcome } from 'components/organisms/ArWelcome';
import { Metadata } from 'next';
import { ArHomePageProps } from './ArHomePage.types';

export const ArHomePageMetadata: Metadata = {
  title: 'Homepage',
};

export function ArHomePage(props: ArHomePageProps) {
  console.log('ArHomePage props:', props);
  return <ArWelcome />;
}
