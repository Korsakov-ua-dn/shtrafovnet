import { memo } from "react";

import type { ColorScheme } from "../types";

import "./style.scss";

interface IProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children: [
    React.ReactElement<JSX.IntrinsicElements["thead"], "thead">,
    React.ReactElement<JSX.IntrinsicElements["tbody"], "tbody">
  ];
  colorScheme?: ColorScheme;
  tableRef?: React.RefObject<HTMLTableElement>;
  wrapRef?: React.RefObject<HTMLDivElement>;
}

export const Table: React.FC<IProps> = 
  ({ children, colorScheme = "mono", tableRef, wrapRef, ...restProps }) => {
    const classTable = `Table Table_${colorScheme}`;

    return (
      <div className={classTable} ref={wrapRef}>
        <table id="table" ref={tableRef} {...restProps}>
          {children}
        </table>
      </div>
    );
  };
