import { typedMemo } from "@/shared/hocs";
import WithTooltip from "@/shared/ui/with-tooltip";

import ClipBoard from "../../clip-board";

import "./style.scss";

interface IProps {
  width: number | undefined;
  clipBoard: boolean | undefined;
  value: string;
}

const Td: React.FC<IProps> = ({width, clipBoard, value}) => {
  return (
    <td className="Td">
      <div
        className="Td__wrap"
        style={width ? { maxWidth: `${width}px` } : {}}
      >
        <WithTooltip>{value}</WithTooltip>
        {clipBoard && <ClipBoard value={value} className="Td__clipBoard"/>}
      </div>
    </td>
  );
};

export default typedMemo(Td);
