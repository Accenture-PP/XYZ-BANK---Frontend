// interface.ts
export interface Account {
  name: string;
  address: string;
  email: string;
  accountType: string;
  balance: number;
}

export interface Portfolio {
  name: string;
  address: string;
  email: string;
  checkingAccountName: string;
  savingsBalance: number;
  bankName: string;
  investments: string[];
}
