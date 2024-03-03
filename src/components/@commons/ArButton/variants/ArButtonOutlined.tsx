import { ArButtonOutlinedProps } from '..';

export function ArButtonOutlined({ children, borderWith, variant, ...buttonProps }: ArButtonOutlinedProps) {
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
