import { MouseEvent, memo } from "react";
import StraightIcon from "@mui/icons-material/Straight";

import WithTooltip from "@/shared/ui/with-tooltip";

import "./style.scss";

import type { Direction, Scheme } from "../types";

interface IProps<T> {
  value: keyof Scheme<T>;
  isSort: boolean;
  width: number | undefined;
  scheme: Scheme<T>;
  isActiveField: boolean;
  direction?: Direction;
  onSort?: (e: MouseEvent<HTMLElement>) => void;
}

const Th = <T,>(props: IProps<T>): JSX.Element => {
  const classN = `
    Th
    ${props.isActiveField ? "Th_active" : ""}
    ${props.isSort ? "Th_sort" : ""}
  `;

  const style = props.width ? { maxWidth: `${props.width}px` } : {};
  const title = props.scheme[props.value]?.title || "";

  return (
    <th
      onClick={props.isSort ? props.onSort : () => {}}
      className={classN}
      data-field={props.value}
    >
      <div style={style}>
        <WithTooltip>{title}</WithTooltip>

        {props.isSort && props.onSort && (
          <StraightIcon
            className="Th__directionArrow"
            data-direction={props.direction}
          />
        )}
      </div>
    </th>
  );
};

export default memo(Th) as typeof Th;
