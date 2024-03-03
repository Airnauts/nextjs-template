import { ArFormCheckboxOutlinedProps } from '..';
import { v4 as uuidv4 } from 'uuid';

export function ArFormCheckboxOutlined({
  id = uuidv4(),
  label,
  borderWidth,
  ...inputProps
}: ArFormCheckboxOutlinedProps) {
  return (
    <label htmlFor={id}>
      <input
        id={id}
        style={{
          border: `${borderWidth}px solid red`,
        }}
        {...inputProps}
      />
      <span>{label}</span>
    </label>
  );
}
