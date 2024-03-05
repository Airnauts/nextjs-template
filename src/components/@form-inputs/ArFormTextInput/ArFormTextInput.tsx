import React from 'react';
import { ArFormTextInputProps, ArFormTextInputVariant } from './ArFormTextInput.types';
import { ArFormTextInputPrimary } from './variants/ArFormTextInputPrimary';

export function ArFormTextInput(props: ArFormTextInputProps) {
  switch (props.variant) {
    case ArFormTextInputVariant.Primary:
      return <ArFormTextInputPrimary {...props} />;
    case ArFormTextInputVariant.Default:
    default:
      return <input {...props} />;
  }
}
