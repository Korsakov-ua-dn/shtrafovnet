import { MouseEvent, useCallback, useEffect } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { Portal } from "../portal";
import { Subtitle } from "../subtitle";

import "./style.scss";

interface IProps {
  children: React.ReactNode;
  title?: string;
  contentWidth?: number;
  onClose: () => void;
}

export const Popup: React.FC<IProps> = ({ children, title, contentWidth=500, onClose }) => {
  const callbacks = {
    onClose: useCallback(
      (e: MouseEvent<HTMLDivElement>) => onClose(),
      [onClose]
    ),
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return (
    <Portal>
      <div className="Popup">
        <div className="Popup__header">
          {title && (
            <Subtitle className="Popup__title">Создание Клиента</Subtitle>
          )}
          <CloseIcon onClick={onClose} className="Popup__close" />
        </div>
        <div className="Popup__content" style={{width: `${contentWidth}px`}}>{children}</div>
      </div>
      <div className="Background" onClick={callbacks.onClose} />
    </Portal>
  );
};
