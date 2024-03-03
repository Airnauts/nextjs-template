import React from 'react';
import { ArFormTextInputProps, ArFormTextInputVariant } from './ArFormTextInput.types';
import { ArFormTextInputOutlined } from './variants/ArFormTextInputOutlined';

export function ArFormTextInput(props: ArFormTextInputProps) {
  switch (props.variant) {
    case ArFormTextInputVariant.Outlined:
      return <ArFormTextInputOutlined {...props} />;
    case ArFormTextInputVariant.Default:
    default:
      return <input {...props} />;
  }
}
