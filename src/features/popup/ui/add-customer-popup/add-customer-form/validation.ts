import * as yup from "yup";

import { client_details } from "../client-details";
import { organization } from "../organization";
import { bank_accounts } from "../bank-accounts";
import { invoice_emails } from "../invoice-emails";
import { metadata } from "../metadata";

export const schema = yup.object().shape({
  ...client_details,
  ...organization,
  ...bank_accounts,
  ...invoice_emails,
  ...metadata,
});

export type FormData = yup.InferType<typeof schema>;
