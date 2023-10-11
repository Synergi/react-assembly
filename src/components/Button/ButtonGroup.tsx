import React from 'react';
import { componentClasses } from "@src/lib/shared";
import { ButtonGroupProps } from "@/components/Button/button.types";
import './button.scss';

const ButtonGroup = ({id, children, classes, label, labelledBy }: ButtonGroupProps) => {
  const classStr = (classes && classes.length > 0) ? componentClasses(classes) : 'default';
  return (
    <div
      id={id}
      role="group"
      aria-label={label}
      aria-labelledby={labelledBy}
      className={'button-group ' + classStr}>
      {children}
    </div>
  );
};

export default ButtonGroup
