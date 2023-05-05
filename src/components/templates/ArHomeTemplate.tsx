import { ArWelcome } from 'components/organisms/ArWelcome';
import { ArMeta } from 'components/utils/ArMeta';
import React from 'react';

export function ArHomeTemplate() {
  return (
    <>
      <ArMeta
        title="Homepage"
        description="Homepage description"
      />
      <ArWelcome />
    </>
  );
}
