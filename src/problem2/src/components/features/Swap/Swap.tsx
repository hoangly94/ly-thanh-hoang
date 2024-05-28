import { Button, Card, Col, Flex, Form, Image, Row, Select, Typography } from "antd";
import S from './swap.styled'
import { SwapPay } from "./SwapPay";
import { SwapReceive } from "./SwapRecieve";
import { SwapContext, useSwapContextValue } from "./swap.context";
import { SwapOutlined } from "@ant-design/icons";

export const Swap = () => {
  const swapContextValue = useSwapContextValue()
  const { form,
    state: { isSwapLoading },
    getters,
    actions: { swap },
  } = swapContextValue

  return (
    <SwapContext.Provider value={swapContextValue}>
      <S.SwapContainer>
        <Form
          form={form}
          name="swap"
          initialValues={{
            payToken: 'BUSD',
            receiveToken: 'ETH',
          }}
        >
          <Card
            bordered={false}
          >
            <Flex justify='center'>
              <Typography.Title title="Swap Token" level={4}>Swap Token</Typography.Title>
            </Flex>
            <Flex vertical gap={8}>
              <SwapPay />
              <S.SwapIconWrapper justify='center'>
                <SwapOutlined rotate={-90} />
              </S.SwapIconWrapper>
              <SwapReceive />
            </Flex>
            <Form.Item shouldUpdate>
              {
                () => {
                  return (
                    <S.SwapButton
                      block
                      size='large'
                      onClick={swap}
                      loading={isSwapLoading}
                      disabled={!getters.payAmount}
                    >
                      Swap
                    </S.SwapButton>
                  )
                }
              }
            </Form.Item>

          </Card>
        </Form>
      </S.SwapContainer>
    </SwapContext.Provider>
  )
};
