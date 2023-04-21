import { Feedback } from './ui/feedback';

export enum POPUPS {
  feedback = 'feedback',
}

export const popups = {
  [POPUPS.feedback]: Feedback,
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
