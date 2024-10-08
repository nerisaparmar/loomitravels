import { configureStore } from "@reduxjs/toolkit";
import { DestinationApi } from "../api/DestinationApi";
import { RandomDestinationApi } from "../api/RandomDestinationApi";
// imported both the api into redux store with reducer and middleware
export const store = configureStore({
  reducer: {
    [DestinationApi.reducerPath]: DestinationApi.reducer,
    [RandomDestinationApi.reducerPath]: RandomDestinationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(DestinationApi.middleware)
      .concat(RandomDestinationApi.middleware),
});
