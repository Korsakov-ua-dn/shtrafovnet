import { AddCustomerPopup } from './ui/add-customer-popup';

export enum POPUPS {
  addCustomer = 'addCustomer',
}

export const popups = {
  [POPUPS.addCustomer]: AddCustomerPopup,
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
