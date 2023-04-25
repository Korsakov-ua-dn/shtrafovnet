import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { customerReducer } from "@/entities/customer";
import { customerSearchReducer } from "@/features/customer-search";
import { popupsReducer } from "@/features/popup";

const rootReducer = combineReducers({
  customer: customerReducer,
  'customer-search': customerSearchReducer,
  popups: popupsReducer,
});

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore);
