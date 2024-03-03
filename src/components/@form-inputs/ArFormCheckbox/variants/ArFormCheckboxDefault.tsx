import { ArFormCheckboxDefaultProps } from '..';
import { v4 as uuidv4 } from 'uuid';

export function ArFormCheckboxDefault({
  id = uuidv4(),
  label,
  borderWidth,
  ...inputProps
}: ArFormCheckboxDefaultProps) {
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
