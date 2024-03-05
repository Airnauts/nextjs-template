import React from 'react';
import { ArFormCheckboxProps, ArFormCheckboxVariant } from './ArFormCheckbox.types';
import { ArFormCheckboxPrimary } from './variants/ArFormCheckboxPrimary';

export function ArFormCheckbox(props: ArFormCheckboxProps) {
  const type = props.type || 'checkbox';

  switch (props.variant) {
    case ArFormCheckboxVariant.Primary:
      return (
        <ArFormCheckboxPrimary
          {...props}
          type={type}
        />
      );
    case ArFormCheckboxVariant.Default:
    default:
      return (
        <input
          {...props}
          type={type}
        />
      );
  }
}
