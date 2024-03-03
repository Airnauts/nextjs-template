import React from 'react';
import { ArFormTextInputProps, ArFormTextInputVariant } from './ArFormTextInput.types';
import { ArFormTextInputDefault } from './variants/ArFormTextInputDefault';

export function ArFormTextInput(props: ArFormTextInputProps) {
  switch (props.variant) {
    case ArFormTextInputVariant.Pure:
      return <input {...props} />;
    case ArFormTextInputVariant.Default:
    default:
      return <ArFormTextInputDefault {...props} />;
  }
}
