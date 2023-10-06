import React from 'react';
import { ButtonProps } from "./button.types";

const Button = ({id, type='button', classes, children, clicked, disabled = false }: ButtonProps ) => {
  return (
    <button
      id={id}
      className={classes.reduce((acc, curr, i ) => {
        return acc += i === 0 ? `${curr}` : ` ${curr}`;
      }, '')}
      type={type}
      onClick={clicked}
      disabled={disabled}
      >
      {children}
    </button>
  )
};

export default Button;
