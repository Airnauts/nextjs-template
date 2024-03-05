import React from 'react';
import { ArFormTextInputProps, ArFormTextInputVariant } from './ArFormTextInput.types';
import { ArFormTextInputPrimary } from './variants/ArFormTextInputPrimary';

export function ArFormTextInput(props: ArFormTextInputProps) {
  const type = props.type || 'text';
  switch (props.variant) {
    case ArFormTextInputVariant.Primary:
      return (
        <ArFormTextInputPrimary
          {...props}
          type={type}
        />
      );
    case ArFormTextInputVariant.Default:
    default:
      return (
        <input
          {...props}
          type={type}
        />
      );
  }
}
