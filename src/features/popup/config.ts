import { AddCustomer } from './ui/add-customer';

export enum POPUPS {
  addCustomer = 'addCustomer',
}

export const popups = {
  [POPUPS.addCustomer]: AddCustomer,
};

export type PopupsNameType = keyof typeof popups;

type RequiredPopupType = {
  name: PopupsNameType;
  onClose: (result?: any) => void;
};

type OptionalPopupType = {
  [key: string]: any;
};

export type CommonPopupType = RequiredPopupType & OptionalPopupType;
