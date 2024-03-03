import { Meta } from '@storybook/react';
import { ArFormCheckbox } from './ArFormCheckbox';

export default {
  title: 'FormInput/ArFormCheckbox',
  component: ArFormCheckbox,
} as Meta<typeof ArFormCheckbox>;

function Template() {
  return <ArFormCheckbox />;
}

export const Default = Template.bind({});
