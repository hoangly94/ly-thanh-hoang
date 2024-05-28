import { SwapRequest, SwapResponse } from "@/models";
import { GetBalancesResponse } from "@/models/account.model";
import { useEffect, useState } from "react";

export const accountService = {
  useGetBalance: () => {
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState<GetBalancesResponse>()

    useEffect(() => {
      setTimeout(() => {
        setData(
          {
            'BUSD': 1000,
            'ETH': 300,
            'USD': 500,
          },
        )
        setLoading(false)
      }, 500);
    }, [])

    return { data, isLoading }
  },
};
