import React from 'react';
export type ButtonType = 'submit' | 'reset' | 'button';

export interface ButtonProps {
  id?: string;
  type?: ButtonType;
  classes: string[];
  children: React.ReactNode;
  clicked: React.MouseEventHandler;
  disabled?: boolean;
}
