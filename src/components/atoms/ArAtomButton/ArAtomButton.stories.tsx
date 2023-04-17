import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArAtomButton } from './ArAtomButton';

export default {
  title: 'Atoms/ArAtomButton',
  component: ArAtomButton,
} as ComponentMeta<typeof ArAtomButton>;

const Template: ComponentStory<typeof ArAtomButton> = function Template() {
  return <ArAtomButton />;
};

export const Default = Template.bind({});
