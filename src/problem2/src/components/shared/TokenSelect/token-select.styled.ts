import { Flex, Select } from "antd";
import styled from "styled-components";

const SelectedToken = styled.div`
  width: 100%;
  & .ant-select-item-option img{
    width: 100px;
  }
`;
const SelectOptionContent = styled(Flex)`
  & img{
    width: 24px !important;
    margin-left:4px;
  }
`;

export default {
  SelectedToken,
  SelectOptionContent
};
