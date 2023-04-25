import { useCallback, useMemo } from 'react';

import { useAppDispatch } from '@/shared/hooks';

import { popupsActions } from '../../model';
import { POPUPS } from '../../config';

/**
 * @returns мемоизированный колбэк для открытия модального окна добавления нового клиента
 */
export function useAddCustomer(): () => void {
  const dispatch = useAppDispatch();

  const feedbackPopup = useMemo(
    () => ({
      name: POPUPS.addCustomer,
      onClose: () => dispatch(popupsActions.close(feedbackPopup)),
    }),
    [dispatch]
  );

  return useCallback(
    () => dispatch(popupsActions.open(feedbackPopup)),
    [dispatch, feedbackPopup]
  );
}
