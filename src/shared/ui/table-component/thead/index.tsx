import { useCallback } from 'react';
import { v1 } from 'uuid';

import { typedMemo } from '@/shared/hocs';

import Th from '../th';
import TrHead from '../tr-head';

import type { Direction, Scheme } from '../types';

interface IProps<T> extends React.HTMLAttributes<HTMLTableSectionElement> {
  scheme: Scheme<T>;
  activeField?: keyof T | undefined;
  direction?: Direction;
  onSort?: (field: keyof T) => void;
}

const Thead = <T extends object>({
  scheme,
  activeField,
  direction,
  onSort,
  ...restProps
}: IProps<T>) => {
  // Один обработчик для всех полей
  const onSortHendler = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const field = e.currentTarget.getAttribute('data-field') as keyof T;
      onSort && onSort(field);
    },
    [onSort]
  );

  const renderTh = (key: keyof T) => {
    const isSort = scheme[key]?.sort;
    const id = v1();
    return (
      <Th
        key={`${key.toString()}__${id}`}
        value={key}
        isSort={!!isSort}
        width={scheme[key]?.width}
        scheme={scheme}
        onSort={onSortHendler}
        isActiveField={activeField === key}
        direction={direction}
      />
    );
  };

  const ThList = [];

  for (const key in scheme) {
    ThList.push(renderTh(key));
  }
  
  return (
    <thead className="Thead" {...restProps}>
      <TrHead>{ThList}</TrHead>
    </thead>
  );
};

export default typedMemo(Thead);
