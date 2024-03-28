import twitterIcon from 'assets/svg/icon-info.svg';
import Image from 'next/image';

export default function ArIconInfo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Image
      priority
      src={twitterIcon}
      alt='Follow us on Twitter'
    />
  );
}
