import { ArFormTextInputOutlinedProps } from '..';

export function ArFormTextInputOutlined({ borderWidth, ...inputProps }: ArFormTextInputOutlinedProps) {
  return (
    <input
      style={{
        border: `${borderWidth}px solid red`,
      }}
      {...inputProps}
    />
  );
}
