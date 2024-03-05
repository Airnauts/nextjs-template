export enum ArFormCheckboxVariant {
  Default = 'default',
  Primary = 'Primary',
}

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type?: 'checkbox' | 'radio';
  variant?: ArFormCheckboxVariant;
};

// Variants

export type ArFormCheckboxPrimaryProps = CheckboxProps & {
  label: string;
  borderWidth: number;
  id?: string;
};

// Props
export type ArFormCheckboxProps =
  | ({
      variant: ArFormCheckboxVariant.Default;
    } & CheckboxProps)
  | ({
      variant?: ArFormCheckboxVariant.Primary;
    } & ArFormCheckboxPrimaryProps);
