export enum ArButtonVariant {
  Pure = 'Pure',
  Default = 'default',
}

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?: ArButtonVariant;
};

// Variants
export type ArButtonDefaultProps = ButtonProps & {
  borderWith: number;
};

export type ArButtonProps =
  | (ButtonProps & {
      variant: ArButtonVariant.Pure;
    })
  | (ArButtonDefaultProps & {
      variant?: ArButtonVariant.Default;
    });
