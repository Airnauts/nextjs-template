import { ArAtomButton } from 'components/atoms/ArAtomButton';
import React from 'react';
import { getAppSiteName } from 'helpers/getAppSiteName';

export function ArWelcomeMolecule() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{getAppSiteName()}</h1>
      <ArAtomButton />
    </div>
  );
}
