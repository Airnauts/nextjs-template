import React from 'react';
import { ArFormCheckboxProps, ArFormCheckboxVariant } from './ArFormCheckbox.types';
import { ArFormCheckboxPrimary } from './variants/ArFormCheckboxPrimary';

export function ArFormCheckbox(props: ArFormCheckboxProps) {
  props.type = props.type || 'checkbox';

  switch (props.variant) {
    case ArFormCheckboxVariant.Primary:
      return <ArFormCheckboxPrimary {...props} />;
    case ArFormCheckboxVariant.Default:
    default:
      return <input {...props} />;
  }
}
