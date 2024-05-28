import { accountService, swapService, tokenService } from "@/data/services";
import { Form, message } from "antd";
import { createContext, useContext, useEffect, useState } from "react";

export const useSwapContextValue = () => {
  const { data: tokenPrices } = tokenService.usePrices()

  const [payBalance, setPayBalance] = useState(1000)
  const [receiveBalance, setReceiveBalance] = useState(200)
  const [isMax, setIsMax] = useState(false)
  const [form] = Form.useForm();

  const [swap, { isLoading: isSwapLoading }] = swapService.usePost()
  const { data: balances, isLoading: isBalanceLoading } = accountService.useGetBalance()

  useEffect(() => {
    setters.setPayToken(form.getFieldValue('payToken'))
    setters.setReceiveToken(form.getFieldValue('receiveToken'))
  }, [balances])

  const getters = {
    get payAmount() {
      return form.getFieldValue('payAmount')
    },
    get receiveAmount() {
      return form.getFieldValue('receiveAmount')
    },
    get payToken() {
      return form.getFieldValue('payToken')
    },
    get receiveToken() {
      return form.getFieldValue('receiveToken')
    },
    get payPrice() {
      return tokenPrices?.[getters.payToken] ?? 0
    },
    get receivePrice() {
      return tokenPrices?.[getters.receiveToken] ?? 0
    },
  }

  const setters = {
    setPayBalance,
    setReceiveBalance,
    setPayToken: (newToken: string) => {
      if (!balances) return
      form.setFieldValue('payToken', newToken)
      setters.setPayAmount(undefined)
      setPayBalance(balances?.[newToken] ?? 0)
    },
    setReceiveToken: (newToken: string) => {
      if (!balances) return
      form.setFieldValue('receiveToken', newToken)
      setters.setReceiveAmount(getters.receiveAmount)
      setReceiveBalance(balances?.[newToken] ?? 0)
    },
    setPayAmount: (newPayAmountInput?: number) => {
      if (!newPayAmountInput) {
        form.setFieldValue('receiveAmount', newPayAmountInput)
        form.setFieldValue('payAmount', newPayAmountInput)
        return
      }

      const newPayAmount = newPayAmountInput > payBalance ? payBalance : newPayAmountInput

      form.setFieldValue('payAmount', newPayAmount)
      form.setFieldValue('receiveAmount', newPayAmount * getters.payPrice / getters.receivePrice)

      setIsMax(newPayAmount === payBalance)
    },
    setReceiveAmount: (newReceiveAmountInput?: number) => {
      setters.setPayAmount(newReceiveAmountInput && (newReceiveAmountInput / getters.payPrice * getters.receivePrice))
    },
    setMaxPayAmount: () => {
      setters.setPayAmount(payBalance)
    },
  }

  const actions = {
    swap: async () => {
      const {
        payToken,
        receiveToken,
        payAmount,
        receiveAmount,
      } = getters

      const response = await swap({
        payToken,
        receiveToken,
        payAmount,
        receiveAmount,
      })

      const isSuccess = response.status === 200
      message[isSuccess ? 'success' : 'error'](response.message)

      if (isSuccess) {
        const newPayBalance = payBalance - payAmount
        const newReceiveBalance = receiveBalance - receiveAmount
        setters.setPayBalance(newPayBalance)
        setters.setReceiveBalance(receiveBalance + receiveAmount)
        balances![getters.payToken] = newPayBalance
        balances![getters.receiveToken] = newReceiveBalance
      }
    },
  }
  return {
    form,
    state: {
      payBalance,
      receiveBalance,
      isMax,
      isSwapLoading,
      isBalanceLoading,
    },
    getters,
    setters,
    actions,
  };

};

type SwapContextType = ReturnType<typeof useSwapContextValue>;

export const SwapContext = createContext({} as SwapContextType);

export const useSwapContext = () => {
  return useContext(SwapContext);
};