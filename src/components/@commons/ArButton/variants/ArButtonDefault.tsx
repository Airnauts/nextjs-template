import { ArButtonDefaultProps } from '..';

export function ArButtonDefault({ children, borderWith, variant, ...buttonProps }: ArButtonDefaultProps) {
  return (
    <button
      {...buttonProps}
      style={{
        border: `${borderWith}px solid red`,
      }}
    >
      {children}
    </button>
  );
}
