import { ChangeEvent, useCallback } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import { typedMemo } from "@/shared/hocs";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { Input } from "@/shared/ui/form-component";

import { customerSearchActions } from "./model";

export const CustomersSearch = typedMemo(() => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state["customer-search"].value)

  const onSearchHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(customerSearchActions.setValue(e.target.value));
    },
    [dispatch]
  );

  return (
    <Input
      value={value}
      onChange={onSearchHandler}
      id="customers-search-input"
      label="Поиск"
      style={{ width: 180, minWidth: 180 }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
});
