import { Meta } from '@storybook/react';
import { ArButton } from './ArButton';

export default {
  title: 'Commons/ArButton',
  component: ArButton,
} as Meta<typeof ArButton>;

function Template() {
  return <ArButton />;
}

export const Default = Template.bind({});
