import { TokenSelect } from "@/components/shared/TokenSelect/TokenSelect";
import { Col, Flex, InputNumberProps, Skeleton, Spin, Typography } from "antd";
import S from './swap.styled'
import { TokenPriceInput } from "@/components/shared/TokenPriceInput";
import { WalletOutlined } from "@ant-design/icons";
import { useSwapContext } from "./swap.context";

export const SwapPay = () => {
  const {
    state: {
      payBalance,
      isMax,
      isBalanceLoading,
    },
    getters: {
      payPrice,
    },
    setters: {
      setPayToken,
      setPayAmount,
      setMaxPayAmount,
    },
  } = useSwapContext()

  const onTokenChange = (newToken: string) => {
    setPayToken(newToken)
  };

  const onTokenPriceChange: InputNumberProps["onChange"] = (price) => {
    setPayAmount(Number(price))
  };

  const onMaxClick = () => {
    setMaxPayAmount()
  };

  return (
    <Flex vertical gap={8}>
      <Flex align="center" justify='space-between'>
        <Typography.Title level={5}>Pay</Typography.Title>
        <Flex align="center" gap={8}>
          <WalletOutlined />
          {
            isBalanceLoading ? <Spin size='small' /> : <Typography.Text>{payBalance}</Typography.Text>
          }
        </Flex>
      </Flex>
      <S.TokenPriceBox gutter={[8, 16]}>
        <Col span={24} sm={16}>
          <TokenPriceInput
            name='payAmount'
            onChange={onTokenPriceChange}
            isMax={isMax}
            onMaxClick={onMaxClick}
          />
          <S.TokenPrice>
            Price: {payPrice}
          </S.TokenPrice>
        </Col>
        <Col span={24} sm={8}>
          <TokenSelect
            name='payToken'
            onChange={onTokenChange}
          />
        </Col>
      </S.TokenPriceBox>
    </Flex>
  )
};
