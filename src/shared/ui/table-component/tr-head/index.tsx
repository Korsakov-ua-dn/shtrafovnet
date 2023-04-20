import { typedMemo } from '@/shared/hocs';

interface IProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode[];
}

const TrHead: React.FC<IProps> = ({ children, ...restProps }) => {
  return (
    <tr {...restProps}>
      {children}
    </tr>
  );
};

export default typedMemo(TrHead);
