import { typedMemo } from '@/shared/hocs';

import './style.scss';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<IProps> = typedMemo(({ children, className }) => {
  return (
    <section className={`Section ${className ? className : ""}`}>
      {children}
    </section>
  );
});
