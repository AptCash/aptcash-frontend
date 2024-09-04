export type TFiatPayment = {
  id: string;
  gatewayId: string;
  amountPaid: number;
  fiatCurrency: string;
  status: string;
  paidAt: string;
};

export type TAptosPayment = {
  id: string;
  txHash: string;
  aptosAmount: number;
  conversionRate: number;
  convertedAt: string;
};

export type TUserTransaction = {
  id: string;
  userId: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  fiatPayment?: TFiatPayment;
  aptosPayment?: TAptosPayment;
};

export type TUser = {
  id: string;
  email: string;
  apiKey: string;
  walletAddress: string;
  name: string;
  avatar: string | null;
  createdAt: string;
  updatedAt: string;
};
