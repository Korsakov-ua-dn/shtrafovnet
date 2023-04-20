import { axiosInstance } from '../base';

import { ICustomer } from './models';

import type { AxiosPromise } from 'axios';

const ENDPOINT = '/api/customers';

export const getAll = (): AxiosPromise<ICustomer[]> => {
  return axiosInstance.get(ENDPOINT);
};