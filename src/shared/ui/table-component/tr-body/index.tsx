
import { typedMemo } from "@/shared/hocs";

import Td from "../td";

import type { Scheme } from "../types";

import "./style.scss";

interface IProps<T> {
  row: T;
  scheme: Scheme<T>;
  painted: boolean;
}

const TrBody = <T extends object>(props: IProps<T>): JSX.Element => {

  const ClassName = `
    TrBody 
    ${props.painted ? "TrBody_painted" : ""}
  `;

  const td = [];

  for (const key in props.scheme) {
    const width = props.scheme[key]?.width;
    const clipBoard = props.scheme[key]?.clipBoard;
    const formatDataFunction = props.scheme[key]?.formatDataFunction;
    // если передана функция форматирования данных для отображения
    const value = formatDataFunction
      ? formatDataFunction(props.row[key])
      : props.row[key];

    td.push(
      <Td key={key} width={width} value={String(value)} clipBoard={clipBoard}/>
    );
  }

  return <tr className={ClassName}>{td}</tr>;
};

export default typedMemo(TrBody);
