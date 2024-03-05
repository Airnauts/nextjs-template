import React from 'react';
import { ArButtonProps, ArButtonVariant } from './ArButton.types';
import { ArButtonPrimary } from './variants/ArButtonPrimary';

export function ArButton(props: ArButtonProps) {
  props.type = props.type || 'button';
  switch (props.variant) {
    case ArButtonVariant.Primary:
      return <ArButtonPrimary {...props} />;
    case ArButtonVariant.Default:
    default:
      return <button {...props}>{props.children}</button>;
  }
}
