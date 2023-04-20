import React, { MouseEvent, memo, useCallback, useEffect } from 'react';

import { Portal } from '../portal';

import './style.scss';

interface IProps {
  children: React.ReactNode;
  onClose: () => void;
}

export const Popup: React.FC<IProps> = ({ children, onClose }) => {
  const callbacks = {
    onClose: useCallback(
      (e: MouseEvent<HTMLDivElement>) => onClose(),
      [onClose]
    ),
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <Portal>
      <div className="Popup">
        <div className="Popup__content">{children}</div>
      </div>
      <div className="Background" onClick={callbacks.onClose} />
    </Portal>
  );
};
