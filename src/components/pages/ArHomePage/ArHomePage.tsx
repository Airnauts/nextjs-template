import React from 'react';
import { Metadata } from 'next';
import { ArHomePageProps } from './ArHomePage.types';

export const ArHomePageMetadata: Metadata = {
  title: 'Homepage',
};

export function ArHomePage(props: ArHomePageProps) {
  console.log('ArHomePage props:', props);
  return <div>Hello, World!</div>;
}
