type AppStore = ReturnType<typeof import('./index').makeStore>;

declare type RootState = ReturnType<AppStore["getState"]>;
declare type AppDispatch = typeof import('./index').store.dispatch;
