import { beforeEach, describe, expect, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Button } from './index';

const clickHandler = (e) => {
  e.stopPropagation();
  console.log(e.target);
};

describe("Button.tsx", () => {

  beforeEach(() => {
    render(<Button
      id="Test"
      type="submit"
      classes={['btn']}
      clicked={clickHandler}
      >Testing</Button>
    );
  });

  test("Should show label", () => {
    expect(screen.getByText(/Testing/i)).toBeDefined();
  });

  test("Should have an id", () => {
    const button = screen.getByRole('button');
    expect(button.getAttribute('id')).toBe('Test');
  });

  test("Should have a type to be 'submit'", () => {
    const button = screen.getByRole('button');
    expect(button.getAttribute('type')).toBe('submit');
  });

  test("Should have a class to be 'btn'", () => {
    const button = screen.getByRole('button');
    expect(button.getAttribute('class')).toBe('btn');
  });

  test("Should register the click", async () => {
    const spy = vi.spyOn(console, 'log');
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(spy).toHaveBeenCalled();
  });
});
