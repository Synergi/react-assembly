import React from 'react';
export type ButtonType = 'submit' | 'reset' | 'button';

type children = React.ReactNode;

export interface ButtonProps {
  id?: string;
  type?: ButtonType;
  classes: string[];
  children;
  clicked: React.MouseEventHandler;
  disabled?: boolean;
  label?: string;
  labelledBy?: string;
}

export interface ButtonGroupProps {
  id?: string;
  children: children;
  classes?: string[];
  label?: string;
  labelledBy?: string;
}
