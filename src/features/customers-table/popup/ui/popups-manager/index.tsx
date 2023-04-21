import { memo } from 'react';

import { useAppSelector } from 'shared/hooks';

import { CommonPopupType, popups } from '../../config';

export const PopupsManager = memo(() => {
  const select = useAppSelector((state) => ({
    mountedPopups: state.popups.mountedPopups,
  }));

  return (
    <>
      {select.mountedPopups.map((mountedPopup: CommonPopupType) => {
        const Component = popups[mountedPopup.name];
        return <Component key={mountedPopup.name} {...mountedPopup} />;
      })}
    </>
  );
});
