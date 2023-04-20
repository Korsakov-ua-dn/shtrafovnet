export interface ICustomer   {
  id: string,
  name: string,
  email: string,
  deferral_days: number,
  org: Org,
  balance: Balance,
  metadata: {
    key1: string,
  },
  created_at: string,
  updated_at: string,
  status: string,
  invoice_prefix: string,
  invoice_emails: string[],
}

type Org = {
  id: string,
  name: string,
  inn: string,
  kpp: string,
  ogrn: string,
  addr: string,
  bank_accounts: BankAccount[],
  created_at: string,
  updated_at: string,
}

type BankAccount = {
  id: string,
  name: string,
  bik: string,
  account_number: string,
  corr_account_number: string,
  is_default: boolean,
  created_at: string,
  updated_at: string,
}

type Balance = {
  currency: string,
  current_amount: number,
  credit_limit: number,
  available_amount: number,
}