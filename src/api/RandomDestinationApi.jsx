import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const RandomDestinationApi = createApi({
  reducerPath: "apirandomdestination",
  baseQuery: fetchBaseQuery({ baseUrl: "https://random-data-api.com/api/v2/" }),
  endpoints: (builder) => ({
    //QUERY -> GET
    //MUTATION -> POST/PUT/DELETE
    getRandomDestination: builder.query({
      query: () => ({ url: "addresses" }),
    }),
  }),
});

export const { useGetRandomDestinationQuery } = RandomDestinationApi;
