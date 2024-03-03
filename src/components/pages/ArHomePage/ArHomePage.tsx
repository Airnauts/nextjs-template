import React from 'react';
import { Metadata } from 'next';
import { ArHomePageProps } from './ArHomePage.types';
import { ArFormTextInput, ArFormTextInputVariant } from 'components/@form-inputs/ArFormTextInput';
import { ArFormCheckbox, ArFormCheckboxVariant } from 'components/@form-inputs/ArFormCheckbox';
import { ArButton, ArButtonVariant } from 'components/@commons/ArButton';

export const ArHomePageMetadata: Metadata = {
  title: 'Homepage',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ArHomePage(props: ArHomePageProps) {
  return (
    <div>
      <ArFormTextInput
        variant={ArFormTextInputVariant.Default}
        borderWidth={2}
      />
      <ArFormCheckbox
        variant={ArFormCheckboxVariant.Default}
        label='Check me out!'
        borderWidth={2}
      />
      <ArButton
        variant={ArButtonVariant.Default}
        borderWith={2}
      >
        Hello World
      </ArButton>
    </div>
  );
}
