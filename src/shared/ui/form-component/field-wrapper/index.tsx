import { typedMemo } from '@/shared/hocs';

import './style.scss';

interface IProps {
  children: React.ReactNode;
}

export const FieldWrapper: React.FC<IProps> = typedMemo((props) => {
  return <div className={"FieldWrapper"}>{props.children}</div>;
});
