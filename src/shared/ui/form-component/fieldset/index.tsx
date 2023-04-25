import { useState } from "react";
import Collapse from "@mui/material/Collapse";

import { typedMemo } from "@/shared/hocs";

import "./style.scss";

interface IProps {
  children: React.ReactNode;
  legend: string;
}

export const Fieldset: React.FC<IProps> = typedMemo(({ children, legend }) => {
  const [isExpanded, setExpanded] = useState<boolean>(true);
  const handleChange = () => {
    setExpanded((prev) => !prev);
  };

  const legendClassName = `Fieldset__legend ${
    isExpanded ? "Fieldset__legend_expanded" : ""
  }`;

  return (
    <fieldset className="Fieldset">
      <legend className={legendClassName} onClick={handleChange}>
        &nbsp;{legend}
      </legend>

      <Collapse in={isExpanded} className="Fieldset__collapse">
        {children}
      </Collapse>
    </fieldset>
  );
});
