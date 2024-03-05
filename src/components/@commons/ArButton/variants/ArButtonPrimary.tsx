import { ArButtonPrimaryProps } from '..';

export function ArButtonPrimary({ children, borderWith, variant, ...buttonProps }: ArButtonPrimaryProps) {
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
