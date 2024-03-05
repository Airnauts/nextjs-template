import { ArFormTextInputPrimaryProps } from '..';

export function ArFormTextInputPrimary({ borderWidth, ...inputProps }: ArFormTextInputPrimaryProps) {
  return (
    <input
      style={{
        border: `${borderWidth}px solid red`,
      }}
      {...inputProps}
    />
  );
}
