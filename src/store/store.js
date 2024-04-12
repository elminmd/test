import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { commonReducer } from "./slices";
import { todosApi, customsApi } from "./apis";

export const store = configureStore({
    reducer: {
        //slices
        common: commonReducer,

        //apis rtk query
        [todosApi.reducerPath]: todosApi.reducer,
        [customsApi.reducerPath]: customsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
            .concat(todosApi.middleware)
            .concat(customsApi.middleware),
});

setupListeners(store.dispatch);