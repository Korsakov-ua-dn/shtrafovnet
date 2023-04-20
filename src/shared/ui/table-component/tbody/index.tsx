import { v1 } from 'uuid';

import { typedMemo } from '@/shared/hocs';

import TrBody from '../tr-body';

import type { Scheme } from '../types';

interface IProps<T> extends React.HTMLAttributes<HTMLTableSectionElement> {
  items: T[];
  scheme: Scheme<T>;
}

const Tbody = <T extends object>({
  items,
  scheme,
  ...restProps
}: IProps<T>): JSX.Element => {
  const tbody = items.map((row, i) => {
    const id = v1();
    return (
      <TrBody
        key={id}
        row={row}
        painted={i % 2 === 0} // покрасить зеброй
        scheme={scheme}
      />
    );
  });

  return (
    <tbody className="Tbody" {...restProps}>
      {tbody}
    </tbody>
  );
};

export default typedMemo(Tbody);
