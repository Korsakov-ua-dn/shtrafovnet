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
  },
  id: {
    format: 'string',
    title: 'ID',
    clipBoard: true,
  },
  email: {
    format: 'string',
    title: 'Email',
  },
  deferral_days: {
    format: 'number',
    formatDataFunction: dataTransferObject['deferral_days'],
    title: 'Отсрочка оплаты',
  },
  created_at: {
    format: 'string',
    formatDataFunction: dataTransferObject['date'],
    title: 'Создан',
  },
  updated_at: {
    format: 'string',
    formatDataFunction: dataTransferObject['date'],
    title: 'Изменен',
  },
};
