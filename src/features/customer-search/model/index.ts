import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CustomerSearchState = {
  value: string;
};

const initialState: CustomerSearchState = {
  value: "",
};

const customerSearchSlice = createSlice({
  name: "customer-search",
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const customerSearchActions = customerSearchSlice.actions;
export const customerSearchReducer = customerSearchSlice.reducer;
