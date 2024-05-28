import { tokenApi } from "@/data/api";
import { Token } from "@/models";
import { uniqBy } from "lodash";

export const tokenService = {
  usePrices: () => {
    const { data: tokens, ...leftPricesQuery } = tokenApi.useGetPricesQuery();

    const tokenPrices = tokens?.reduce((acc, { currency, price }) => {
      if (!acc[currency] || price > acc[currency]) {
        acc[currency] = price;
      }
      return acc;
    }, {} as Record<string, number>);

    return {
      data: tokenPrices,
      ...leftPricesQuery
    }
  },
  useTokens: () => {
    const { data, ...leftPricesQuery } = tokenApi.useGetPricesQuery();

    const tokens = uniqBy(data, 'currency').map(tokenPrice => ({
      currency: tokenPrice.currency
    }))

    return {
      data: tokens satisfies Token[],
      ...leftPricesQuery
    }
  },
};