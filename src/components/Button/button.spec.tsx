import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from './button';

const clickHandler = (e) => {
  e.stopPropagation();
  console.log(e.target);
}

describe("button.tsx", () => {

  beforeEach(() => {
    render(<Button
      id="Test"
      type="submit"
      classes={['btn']}
      clicked={clickHandler}
      >Testing</Button>
    );
  })
  test("Should show label", () => {
    expect(screen.getByText(/Testing/i)).toBeDefined();
  });

  test("Should have an id", () => {
    // Test here
  });
});
