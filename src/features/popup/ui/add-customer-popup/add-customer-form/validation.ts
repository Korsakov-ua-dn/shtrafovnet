import * as yup from "yup";

import { invoice_emails } from "../invoice-emails";
import { client_details } from "../client-details";
import { bank_accounts } from "../bank-accounts";

export const schema = yup.object().shape({
  ...client_details,
  ...bank_accounts,
  ...invoice_emails,
});

export type FormData = yup.InferType<typeof schema>;
