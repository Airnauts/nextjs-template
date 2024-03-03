import React from 'react';
import { ArFormCheckboxProps, ArFormCheckboxVariant } from './ArFormCheckbox.types';
import { ArFormCheckboxOutlined } from './variants/ArFormCheckboxOutlined';

export function ArFormCheckbox(props: ArFormCheckboxProps) {
  const type = props.type || 'checkbox';

  switch (props.variant) {
    case ArFormCheckboxVariant.Outlined:
      return (
        <ArFormCheckboxOutlined
          {...props}
          type={type}
        />
      );
    case ArFormCheckboxVariant.Default:
      return (
        <input
          {...props}
          type={type}
        />
      );
    default:
      break;
  }
}
