import { Meta } from '@storybook/react';
import { ArButton } from './ArButton';
import { ArButtonVariant } from '.';

export default {
  title: 'Commons/ArButton',
  component: ArButton,
} as Meta<typeof ArButton>;

function Template() {
  return (
    <ArButton
      variant={ArButtonVariant.Primary}
      borderWith={2}
    >
      Button
    </ArButton>
  );
}

export const Default = Template.bind({});
