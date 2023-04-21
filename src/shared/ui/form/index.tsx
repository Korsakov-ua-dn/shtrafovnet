import React, { memo } from 'react';

import './style.scss';

interface IProps {
  children: React.ReactNode;
  className?: string;
  onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}

export const Form: React.FC<IProps> = memo(
  ({ children, className, onSubmit }) => {
    return (
      <form
        className={`Form ${className ? 'Form_' + className : ''}`}
        onSubmit={onSubmit}
      >
        {children}
      </form>
    );
  }
);
