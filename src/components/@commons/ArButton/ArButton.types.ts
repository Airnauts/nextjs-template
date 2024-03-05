export enum ArButtonVariant {
  Default = 'Default',
  Primary = 'primary',
}

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?: ArButtonVariant;
};

// Variants
export type ArButtonPrimaryProps = ButtonProps & {
  borderWith: number;
};

export type ArButtonProps =
  | (ButtonProps & {
      variant: ArButtonVariant.Default;
    })
  | (ArButtonPrimaryProps & {
      variant?: ArButtonVariant.Primary;
    });
