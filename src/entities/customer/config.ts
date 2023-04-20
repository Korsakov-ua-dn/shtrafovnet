import { dataTransferObject } from './lib';

import type { ICustomer } from '@/shared/api';
import type { Scheme } from '@/shared/ui/table-component';

/**
 * Порядок элементов в схеме и их параметры управляют дальнейшим отображением в таблице.
 */
export const scheme: Scheme<ICustomer> = {
  name: {
    format: 'string',
    title: 'Имя',
    sort: false,
  },
  id: {
    format: 'string',
    title: 'ID',
    sort: false,
    clipBoard: true,
  },
  email: {
    format: 'string',
    title: 'Email',
    sort: false,
  },
  deferral_days: {
    format: 'number',
    formatDataFunction: dataTransferObject['deferral_days'],
    title: 'Отсрочка оплаты',
    sort: false,
  },
  created_at: {
    format: 'string',
    formatDataFunction: dataTransferObject['date'],
    title: 'Создан',
    sort: false,
  },
  updated_at: {
    format: 'string',
    formatDataFunction: dataTransferObject['date'],
    title: 'Изменен',
    sort: false,
  },
};
