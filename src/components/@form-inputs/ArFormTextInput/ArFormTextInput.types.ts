export enum ArFormTextInputVariant {
  Default = 'default',
  Primary = 'Primary',
}

// Default Props
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: ArFormTextInputVariant;
};

// Variants
export type ArFormTextInputPrimaryProps = InputProps & {
  borderWidth: number;
};

// Props
export type ArFormTextInputProps =
  | (InputProps & {
      variant: ArFormTextInputVariant.Default;
    })
  | (ArFormTextInputPrimaryProps & {
      variant?: ArFormTextInputVariant.Primary;
    });
