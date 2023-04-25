import { AnyAction, PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import type { ICustomer } from "@/shared/api/axios";

import { addCustomer, fetchAllCustomers } from "./thunks";

type CustomerState = {
  data: ICustomer[];
  loading: boolean;
  error: string | null;
};

const initialState: CustomerState = {
  data: [],
  loading: true,
  error: null,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(hydrate, (state, action) => {
        return {
          ...state,
          ...action.payload.customer,
        };
      })
      .addCase(fetchAllCustomers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCustomers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(addCustomer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCustomer.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const customerReducer = customerSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}

const hydrate = createAction<RootState>(HYDRATE);
