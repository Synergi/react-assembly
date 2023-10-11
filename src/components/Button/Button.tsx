import React from 'react';
import { componentClasses } from '@src/lib/shared';
import { ButtonProps } from "./button.types";

const Button = ({id, type='button', classes, children, clicked, disabled = false, label, labelledBy }: ButtonProps ) => {
  return (
    <button
      id={id}
      className={componentClasses(classes)}
      type={type}
      aria-label={label}
      aria-labelledby={labelledBy}
      onClick={clicked}
      disabled={disabled}
      >
      {children}
    </button>
  )
};

export default Button;
