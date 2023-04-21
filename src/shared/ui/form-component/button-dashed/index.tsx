import { typedMemo } from '@/shared/hocs';

import './style.scss';

type Props = JSX.IntrinsicElements['button'] & {
  action?: Action;
  className?: string;
  white?: boolean;
};

export const ButtonDashed: React.FC<Props> = typedMemo(
  ({ className, action = "add", ...restProps }) => {
    const props = {
      ...restProps,
      className: `ButtonDashed ${'ButtonDashed_' + action} ${className ? className : ''}`,
    };

    return <button {...props} />;
  }
);

type Action = "add" | "remove";
