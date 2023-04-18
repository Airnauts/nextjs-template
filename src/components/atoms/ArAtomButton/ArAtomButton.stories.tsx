import { Meta } from '@storybook/react';
import { ArAtomButton } from './ArAtomButton';

export default {
  title: 'Atoms/ArAtomButton',
  component: ArAtomButton,
} as Meta<typeof ArAtomButton>;

function Template() {
  return <ArAtomButton />;
}

export const Default = Template.bind({});
