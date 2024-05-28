

export interface SwapRequest {
  payToken: string
  receiveToken: string
  payAmount: number
  receiveAmount: number
}

export interface SwapResponse {
  status: number
  message: string
}
