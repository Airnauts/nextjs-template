export enum ArFormCheckboxVariant {
  Pure = 'pure',
  Default = 'default',
}

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type?: 'checkbox' | 'radio';
  variant?: ArFormCheckboxVariant;
};

// Variants

export type ArFormCheckboxDefaultProps = CheckboxProps & {
  label: string;
  borderWidth: number;
  id?: string;
};

// Props
export type ArFormCheckboxProps =
  | ({
      variant: ArFormCheckboxVariant.Pure;
    } & CheckboxProps)
  | ({
      variant?: ArFormCheckboxVariant.Default;
    } & ArFormCheckboxDefaultProps);
