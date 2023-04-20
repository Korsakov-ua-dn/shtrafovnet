import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import { typedMemo } from "@/shared/hocs";

interface IProps {
  value: string;
  className?: string;
}

const ClipBoard: React.FC<IProps> = ({ value, className }) => {
  return (
    <ContentCopyIcon
      className={className}
      onClick={() => {
        navigator.clipboard.writeText(value);
      }}
    />
  );
};

export default typedMemo(ClipBoard);
