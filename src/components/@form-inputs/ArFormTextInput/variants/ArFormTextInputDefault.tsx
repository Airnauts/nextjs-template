import { ArFormTextInputDefaultProps } from '..';

export function ArFormTextInputDefault({ borderWidth, ...inputProps }: ArFormTextInputDefaultProps) {
  return (
    <input
      style={{
        border: `${borderWidth}px solid red`,
      }}
      {...inputProps}
    />
  );
}
