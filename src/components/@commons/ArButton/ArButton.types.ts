export enum ArButtonVariant {
  Default = 'default',
  Outlined = 'outlined',
}

type DefaultProps = React.HTMLProps<HTMLButtonElement> & {
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?: ArButtonVariant;
};

// Variants
export type ArButtonOutlinedProps = DefaultProps & {
  borderWith: number;
};

export type ArButtonProps =
  | (DefaultProps & {
      variant?: ArButtonVariant.Default;
    })
  | (ArButtonOutlinedProps & {
      variant: ArButtonVariant.Outlined;
    });
