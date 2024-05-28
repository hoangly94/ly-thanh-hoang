import { TokenSelect } from "@/components/shared/TokenSelect/TokenSelect";
import { Col, Flex, InputNumberProps, Spin, Typography } from "antd";
import S from './swap.styled'
import { TokenPriceInput } from "@/components/shared/TokenPriceInput";
import { WalletOutlined } from "@ant-design/icons";
import { useSwapContext } from "./swap.context";

export const SwapReceive = () => {
  const {
    state: {
      receiveBalance,
      isBalanceLoading,
    },
    getters: {
      receivePrice,
    },
    setters: {
      setReceiveToken,
      setReceiveAmount,
    },
  } = useSwapContext()

  const onTokenChange = (newToken: string) => {
    setReceiveToken(newToken)
  };

  const onTokenPriceChange: InputNumberProps["onChange"] = (price) => {
    setReceiveAmount(Number(price))
  };

  return (
    <Flex vertical gap={8}>
      <Flex align="center" justify='space-between'>
        <Typography.Title level={5}>Receive</Typography.Title>
        <Flex align="center" gap={8}>
          <WalletOutlined />
          {
            isBalanceLoading ? <Spin size='small' /> : <Typography.Text>{receiveBalance}</Typography.Text>
          }
        </Flex>
      </Flex>
      <S.TokenPriceBox gutter={[8, 16]}>
        <Col span={24} sm={16}>
          <TokenPriceInput
            name='receiveAmount'
            onChange={onTokenPriceChange}
          />
          <S.TokenPrice>
            Price: {receivePrice}
          </S.TokenPrice>
        </Col>
        <Col span={24} sm={8}>
          <TokenSelect
            name='receiveToken'
            onChange={onTokenChange}
          />
        </Col>
      </S.TokenPriceBox>
    </Flex>
  )
};
