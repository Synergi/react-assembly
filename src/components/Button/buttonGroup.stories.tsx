// noinspection SyntaxError

import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup, Button } from './index';
import React from "react";

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/Button Group',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

const clickHandler = (e) => {
  e.stopPropagation();
  console.log(e.target);
};

const displayHidden = { display: 'none' };

export const Example: Story = {
    render: (args) => (
      <ButtonGroup {...args}>
        <Button
          classes={['btn']}
          clicked={clickHandler}>First Button</Button>
          <Button
          classes={['btn']}
          clicked={clickHandler}>Middle Button</Button>
          <Button
          classes={['btn']}
          clicked={clickHandler}
          labelledBy="test-aria">
            <div id="test-aria" style={displayHidden}>Test Aria Description: Submit Button</div>
            Last Button
          </Button>
      </ButtonGroup>
    )
  };

