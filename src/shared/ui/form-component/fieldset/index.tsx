import { typedMemo } from "@/shared/hocs";

import "./style.scss";

interface IProps {
  children: React.ReactNode;
  legend: string;
}

export const Fieldset: React.FC<IProps> = typedMemo(({ children, legend }) => {
  return (
    <fieldset className="Fieldset">
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
});
