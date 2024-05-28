import { Button, Form, InputNumber, InputNumberProps } from "antd";
import S from './token-price-input.styled'
import { useSwapContext } from "@/components/features/Swap/swap.context";

interface TokenSelectProps {
  name: string
  isMax?: boolean,
  onChange: InputNumberProps["onChange"]
  onMaxClick?: () => void
}

export const TokenPriceInput = ({
  name,
  isMax,
  onChange,
  onMaxClick,
}: TokenSelectProps) => {
  const { form } = useSwapContext()
  return (
    <S.TokenPriceWrapper
      align='center'
    >
      <Form.Item
        name={name}
      >
        <InputNumber
          variant='borderless'
          size='large'
          onChange={onChange}
          placeholder="Amount"
        />
      </Form.Item>
      {
        onMaxClick && (
          <Button
            type={isMax ? 'primary' : 'text'}
            onClick={onMaxClick}
          >
            Max
          </Button>
        )
      }
    </S.TokenPriceWrapper>
  )
};
