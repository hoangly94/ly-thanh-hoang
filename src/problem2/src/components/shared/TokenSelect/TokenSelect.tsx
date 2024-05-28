import { Form, Image, Select } from "antd";
import S from './token-select.styled'
import { tokenService } from "@/data/services";
import { tokenIconFallbackPath, tokenIconPath } from "@/constants";

interface TokenSelectProps {
  name: string,
  defaultValue?: string
  onChange: (value: string) => void
}

export const TokenSelect = ({
  name,
  defaultValue,
  onChange,
}: TokenSelectProps) => {
  const { data: tokens, isLoading } = tokenService.useTokens()

  const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <S.SelectedToken>
      <Form.Item name={name}>
        <Select
          showSearch
          placeholder="Select token"
          optionFilterProp="children"
          onChange={onChange}
          filterOption={filterOption}
          loading={isLoading}
          size='large'
          defaultValue={defaultValue}
        >
          {tokens?.map(token => (
            <Select.Option key={token.currency} label={token.currency}>
              <S.SelectOptionContent align='center'>
                <Image
                  preview={false}
                  loading='lazy'
                  fallback={tokenIconFallbackPath}
                  src={`${tokenIconPath}${token.currency}.svg`}
                />
                <span style={{ marginLeft: 8 }}>{token.currency}</span>
              </S.SelectOptionContent>
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </S.SelectedToken>
  )
};
