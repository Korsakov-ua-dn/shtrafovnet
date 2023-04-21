import { useCallback, useMemo } from 'react';

import { useAppDispatch } from '@/shared/hooks';

import { popupsActions } from '../../model';
import { POPUPS } from '../../config';

export function useAddCustomer() {
  const dispatch = useAppDispatch();

  const addCustomerPopup = useMemo(
    () => ({
      name: POPUPS.addCustomer,
      onClose: () => dispatch(popupsActions.close(addCustomerPopup)),
    }),
    [dispatch]
  );

  return useCallback(
    () => dispatch(popupsActions.open(addCustomerPopup)),
    [dispatch, addCustomerPopup]
  );
}
