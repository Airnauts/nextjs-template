import { ArWelcome } from 'components/organisms/ArWelcome';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Homepage',
};

export default function HomepagePage() {
  return (
    <div>
      <ArWelcome />
    </div>
  );
}
