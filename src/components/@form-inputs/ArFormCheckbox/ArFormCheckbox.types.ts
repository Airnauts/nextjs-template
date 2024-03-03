export enum ArFormCheckboxVariant {
  Default = 'default',
  Outlined = 'outlined',
}

type DefaultInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type?: 'checkbox' | 'radio';
};

// Variants

export type ArFormCheckboxOutlinedProps = DefaultInputProps & {
  label: string;
  borderWidth: number;
  id?: string;
};

// Props
export type ArFormCheckboxProps =
  | ({
      variant?: ArFormCheckboxVariant.Default;
    } & DefaultInputProps)
  | ({
      variant: ArFormCheckboxVariant.Outlined;
    } & ArFormCheckboxOutlinedProps);
