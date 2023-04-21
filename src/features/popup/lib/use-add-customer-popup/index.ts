import { useCallback, useMemo } from 'react';

import { useAppDispatch } from '@/shared/hooks';

import { popupsActions } from '../../model';
import { POPUPS } from '../../config';

export function useAddCustomer() {
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
