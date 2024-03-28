import React from 'react';
import { Metadata } from 'next';
import { ArHomePageProps } from './ArHomePage.types';
import { ArFormTextInput, ArFormTextInputVariant } from 'components/@form-inputs/ArFormTextInput';
import { ArFormCheckbox, ArFormCheckboxVariant } from 'components/@form-inputs/ArFormCheckbox';
import { ArButton, ArButtonVariant } from 'components/@commons/ArButton';
import { ArIcon } from 'components/@commons/ArIcon';
import InfoIcon from 'assets/svg/icon-info.svg';

export const ArHomePageMetadata: Metadata = {
  title: 'Homepage',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ArHomePage(props: ArHomePageProps) {
  return (
    <div>
      <ArFormTextInput
        variant={ArFormTextInputVariant.Primary}
        borderWidth={2}
      />
      <ArFormCheckbox
        variant={ArFormCheckboxVariant.Primary}
        label='Check me out!'
        borderWidth={2}
      />
      <ArButton
        variant={ArButtonVariant.Primary}
        borderWith={2}
      >
        Hello World
      </ArButton>
      <ArIcon
        icon={InfoIcon}
        iconName='icon-info'
        size={20}
      />
    </div>
  );
}
