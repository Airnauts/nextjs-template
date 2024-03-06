import { ArIconProps } from './ArIcon.types';

export function ArIcon(props: ArIconProps) {
  const style: Record<string, string | number> = {
    width: '100%',
    height: '100%',
  };

  if ('size' in props) {
    style.maxWidth = props.size;
    style.maxHeight = props.size;
  } else {
    style.maxWidth = props.width || 'none';
    style.maxHeight = props.height || 'none';
  }

  const IconComponent = props.icon;

  return (
    <IconComponent
      className={props.className}
      style={style}
    />
  );
}
