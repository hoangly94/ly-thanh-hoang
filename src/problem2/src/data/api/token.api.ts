import { TokenPricesResponse } from "@/models";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tokenApi = createApi({
  reducerPath: "tokenApi",
  tagTypes: ["Token"],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://interview.switcheo.com/' }),
  endpoints: (builder) => ({
    getPrices: builder.query<TokenPricesResponse, void>({
      query: () => ({ method: "GET", url: "prices.json" }),
    }),
  }),
});


