import { forwardRef, memo } from "react";
import Switch, { SwitchProps } from "@mui/material/Switch";

import "./style.scss";

// eslint-disable-next-line react/display-name
const SwitchMUI = forwardRef<HTMLInputElement, SwitchProps>(
  ({ disabled, ...rest }: SwitchProps, ref) => {
    const props = {
      ...rest,
      className: `Switch ${disabled ? "Switch_disabled" : ""}`, // изьял оригинальный атрибут disabled т.к. значение true в форме заменяется undefined
    };

    return <Switch inputRef={ref} {...props} />;
  }
);

export default memo(SwitchMUI) as typeof SwitchMUI;
