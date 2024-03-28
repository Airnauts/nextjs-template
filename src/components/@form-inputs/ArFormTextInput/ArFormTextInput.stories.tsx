import { Meta } from '@storybook/react';
import { ArFormTextInput } from './ArFormTextInput';
import { ArFormTextInputVariant } from '.';

export default {
  title: 'FormInput/ArFormTextInput',
  component: ArFormTextInput,
} as Meta<typeof ArFormTextInput>;

function Template() {
  return (
    <ArFormTextInput
      variant={ArFormTextInputVariant.Primary}
      borderWidth={2}
    />
  );
}

export const Default = Template.bind({});
