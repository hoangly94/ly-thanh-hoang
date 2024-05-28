import { Button, Flex, Row, Typography } from "antd";
import styled from "styled-components";

const SwapContainer = styled(Flex)`
  justify-content: center;
  align-items: center;
  height:100%;
  &>*{
    width: 400px;
    max-width: 100%;
  }
`;

const TokenPriceBox = styled(Row)`
  background-color: #00000044;
  padding: 16px 8px;
  border-radius: 8px;
`;

const SwapIconWrapper = styled(Flex)`
  margin-top:16px;
  &>span{
    border: 1px solid #888;
    border-radius: 50%;
    padding: 8px;
  }
`;

const TokenPrice = styled(Typography.Text)`
  font-size: 10px;
  color: #888;
  padding-left: 10px;
`;

const SwapButton = styled(Button)`
  background: url(https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg) no-repeat center / cover;
  margin-top:30px;
  color:#444;
  font-weight: bold;
`;

export default {
  SwapContainer,
  TokenPriceBox,
  SwapIconWrapper,
  TokenPrice,
  SwapButton,
};
