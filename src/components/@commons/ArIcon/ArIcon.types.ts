type BasicProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement> & { title?: string }>;
  iconName: string;
  className?: string;
};

export type ArIconProps =
  | (BasicProps & {
      width: string | number;
      height: string | number;
    })
  | (BasicProps & {
      size: string | number;
    });
