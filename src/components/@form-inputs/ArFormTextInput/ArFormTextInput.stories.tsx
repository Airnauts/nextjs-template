import { Meta } from '@storybook/react';
import { ArFormTextInput } from './ArFormTextInput';

export default {
  title: 'FormInput/ArFormTextInput',
  component: ArFormTextInput,
} as Meta<typeof ArFormTextInput>;

function Template() {
  return <ArFormTextInput borderWidth={2} />;
}

export const Default = Template.bind({});
