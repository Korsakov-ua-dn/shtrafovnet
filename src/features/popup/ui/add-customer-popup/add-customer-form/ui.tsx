import { useMemo } from "react";
import Button from "@mui/material/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Form } from "@/shared/ui/form-component";

import { InvoiceEmails } from "../invoice-emails/ui";
import { ClientDetails } from "../client-details";
import { BankAccounts } from "../bank-accounts";

import { FormData, schema } from "./validation";
import "./style.scss";

export const AddCustomerForm = () => {
  const {
    control,
    formState: { errors,  },
    handleSubmit,
    register,
    setValue,
    getValues,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // onClose();
    // console.log(data["invoice_emails"]?.map((el) => el.name)); // prepare emails
    console.log(JSON.stringify(data, null, 4));
  };

  const clientDetailsErrors = useMemo(
    () => ({
      name: errors.name,
      email: errors.email,
      deferral_days: errors.deferral_days,
      credit_limit: errors.credit_limit,
    }),
    [errors.name, errors.email, errors.deferral_days, errors.credit_limit]
  );
  const invoiceEmailsErrors = useMemo(
    () => ({
      invoice_emails: errors.invoice_emails,
    }),
    [errors.invoice_emails]
  );
  const bankAccountsErrors = useMemo(
    () => ({
      bank_accounts: errors.bank_accounts,
    }),
    [errors.bank_accounts]
  );

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="AddCustomerForm">
      <ClientDetails register={register} errors={clientDetailsErrors} />

      <BankAccounts
        control={control}
        register={register}
        getValues={getValues}
        setValue={setValue}
        errors={bankAccountsErrors}
      />

      <InvoiceEmails
        control={control}
        register={register}
        errors={invoiceEmailsErrors}
      />

      <Button type="submit" variant="contained">
        Создать
      </Button>
    </Form>
  );
};
