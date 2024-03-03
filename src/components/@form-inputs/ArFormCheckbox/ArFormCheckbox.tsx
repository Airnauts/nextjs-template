import React from 'react';
import { ArFormCheckboxProps, ArFormCheckboxVariant } from './ArFormCheckbox.types';
import { ArFormCheckboxDefault } from './variants/ArFormCheckboxDefault';

export function ArFormCheckbox(props: ArFormCheckboxProps) {
  const type = props.type || 'checkbox';

  switch (props.variant) {
    case ArFormCheckboxVariant.Pure:
      return (
        <input
          {...props}
          type={type}
        />
      );
    case ArFormCheckboxVariant.Default:
    default:
      return (
        <ArFormCheckboxDefault
          {...props}
          type={type}
        />
      );
  }
}
