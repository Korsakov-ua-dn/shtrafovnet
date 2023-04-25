import { FormData } from "../../ui/add-customer-popup/add-customer-form";

export function prepareData(data: FormData) {
  const { organization, bank_accounts, metadata, invoice_emails, ...rest } =
    data;

  return {
    ...rest,
    invoice_emails: invoice_emails.map((el) => el.name),
    organization: { ...organization, bank_accounts },
    metadata: metadata.reduce(
      (obj, item) => ({ ...obj, [item.key]: item.value }),
      {}
    ),
    invoice_prefix: "string"
  };
}
