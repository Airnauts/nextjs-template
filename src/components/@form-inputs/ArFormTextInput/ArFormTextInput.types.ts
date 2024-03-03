export enum ArFormTextInputVariant {
  Default = 'default',
  Outlined = 'outlined',
}

// Default Props
type DefaultInputProps = React.InputHTMLAttributes<HTMLInputElement>;

// Variants
export type ArFormTextInputOutlinedProps = DefaultInputProps & {
  borderWidth: number;
};

// Props
export type ArFormTextInputProps =
  | (DefaultInputProps & {
      variant?: ArFormTextInputVariant.Default;
    })
  | (ArFormTextInputOutlinedProps & {
      variant: ArFormTextInputVariant.Outlined;
    });
