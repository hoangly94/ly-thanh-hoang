import { SwapRequest, SwapResponse } from "@/models";
import { useState } from "react";

export const swapService = {
  usePost: () => {
    const [isLoading, setLoading] = useState(false)

    const request = (swapRequest: SwapRequest): Promise<SwapResponse> => {
      const isSucess = Math.floor(Math.random() * 2)
      return new Promise((resolve) => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
          resolve({
            status: isSucess ? 200 : 500,
            message: isSucess ? 'Success' : 'Error',
          })

        }, 2000);
      });
    }
    return [request, { isLoading }] as const
  },
};
