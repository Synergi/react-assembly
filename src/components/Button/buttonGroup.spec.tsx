import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button, ButtonGroup } from './index';
import React from "react";

const clickHandler = (e) => {
  e.stopPropagation();
  console.log(e.target);
};

const displayHidden = { display: 'none' };

describe("ButtonGroup", () => {
  beforeEach(() => {
    render(
      <ButtonGroup label="control-buttons">
        <Button
          id="Reset"
          type="reset"
          classes={['btn', 'btn-reset']}
          clicked={clickHandler}
          label="Reset"
        >Reset Button</Button>
        <Button
          id="Submit"
          type="submit"
          classes={['btn', 'btn-submit']}
          clicked={clickHandler}
          labelledBy="test-aria"
        >
          <div id="test-aria" style={displayHidden}>Test Aria Description: Submit Button</div>
          Submit Button
        </Button>
      </ButtonGroup>
    );
  });

  test("Should render a div with the role of 'group'", () => {
    expect(screen.getByRole('group')).toBeDefined();
  });

  test("Should have an aria-label", () => {
    expect(screen.getByLabelText('control-buttons')).toBeDefined();
  });

  test("Should display children", () => {
    const children = screen.getAllByRole("button");
    expect(children.length).toBe(2);
  })
});
