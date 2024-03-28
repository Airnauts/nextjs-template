import { Meta } from '@storybook/react';
import { ArFormCheckbox } from './ArFormCheckbox';
import { ArFormCheckboxVariant } from '.';

export default {
  title: 'FormInput/ArFormCheckbox',
  component: ArFormCheckbox,
} as Meta<typeof ArFormCheckbox>;

function Template() {
  return (
    <ArFormCheckbox
      variant={ArFormCheckboxVariant.Primary}
      label='Label'
      borderWidth={2}
    />
  );
}

export const Default = Template.bind({});
