// noinspection SyntaxError

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const clickHandler = (e) => {
  e.preventDefault();
  console.log(e.target);
}

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

export const Accessibility: Story = {
  args: {
    id: 'accessible-button',
    type: 'button',
    classes: ['button'],
    children: 'Default Button',
    clicked: clickHandler,
    label: 'button accessible description'
  },
};
