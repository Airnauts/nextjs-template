import React from 'react';
import { ArButtonProps, ArButtonVariant } from './ArButton.types';
import { ArButtonOutlined } from './variants/ArButtonOutlined';

export function ArButton(props: ArButtonProps) {
  const type = props.type || 'button';
  switch (props.variant) {
    case ArButtonVariant.Outlined:
      return (
        <ArButtonOutlined
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
