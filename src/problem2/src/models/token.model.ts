
export interface Token {
  currency: string
}

export interface TokenPrice extends Token {
  date: string
  price: number
}

export type TokenPricesResponse = TokenPrice[]