import React from 'react';
import { ArButtonProps, ArButtonVariant } from './ArButton.types';
import { ArButtonDefault } from './variants/ArButtonDefault';

export function ArButton(props: ArButtonProps) {
  const type = props.type || 'button';
  switch (props.variant) {
    case ArButtonVariant.Pure:
      return (
        <button
          {...props}
          type={type}
        >
          {props.children}
        </button>
      );
    case ArButtonVariant.Default:
    default:
      return (
        <ArButtonDefault
          {...props}
          type={type}
        />
      );
  }
}
