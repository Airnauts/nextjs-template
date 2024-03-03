export enum ArFormTextInputVariant {
  Pure = 'pure',
  Default = 'default',
}

// Default Props
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: ArFormTextInputVariant;
};

// Variants
export type ArFormTextInputDefaultProps = InputProps & {
  borderWidth: number;
};

// Props
export type ArFormTextInputProps =
  | (InputProps & {
      variant: ArFormTextInputVariant.Pure;
    })
  | (ArFormTextInputDefaultProps & {
      variant?: ArFormTextInputVariant.Default;
    });
