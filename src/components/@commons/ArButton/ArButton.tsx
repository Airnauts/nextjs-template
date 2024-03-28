import React from 'react';
import { ArButtonProps, ArButtonVariant } from './ArButton.types';
import { ArButtonPrimary } from './variants/ArButtonPrimary';

export function ArButton(props: ArButtonProps) {
  const type = props.type || 'button';
  switch (props.variant) {
    case ArButtonVariant.Primary:
      return (
        <ArButtonPrimary
          {...props}
          type={type}
        />
      );
    case ArButtonVariant.Default:
    default:
      return (
        <button
          {...props}
          type={type}
        >
          {props.children}
        </button>
      );
  }
}
