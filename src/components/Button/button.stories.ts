import type { Meta, StoryObj } from '@storybook/react';

import Button from './button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const clickHandler = (e) => {
  e.preventDefault();
  console.log(e.target);
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Disabled: Story = {
  args: {
    id: 'disabled- button',
    type: 'button',
    classes: ['btn', 'btn-disabled'],
    children: 'Disabled Button',
    clicked: clickHandler,
    disabled: true,
  },
};

export const Submit: Story = {
  args: {
    id: 'submit-button',
    type: 'submit',
    classes: ['btn', 'btn-submit'],
    children: 'Submit Button',
    clicked: clickHandler,
  },
};

export const Reset: Story = {
  args: {
    id: 'reset-button',
    type: 'reset',
    classes: ['btn', 'btn-reset'],
    children: 'Reset Button',
    clicked: clickHandler,
  },
};

export const Default: Story = {
  args: {
    id: 'default- button',
    type: 'button',
    classes: ['btn', 'btn-button'],
    children: 'Default Button',
    clicked: clickHandler,
  },
};
