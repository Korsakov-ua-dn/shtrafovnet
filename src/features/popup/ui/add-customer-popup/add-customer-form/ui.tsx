import { useMemo } from "react";
import Button from "@mui/material/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Form } from "@/shared/ui/form-component";

import { prepareData } from "../../../lib/prepare-add-customer-data";

import { ClientDetails } from "../client-details";
import { Organization } from "../organization";
import { BankAccounts } from "../bank-accounts";
import { InvoiceEmails } from "../invoice-emails/ui";
import { Metadata } from "../metadata";

import { FormData, schema } from "./validation";
import "./style.scss";

interface IProps {
  onSubmit: SubmitHandler<FormData>;
}

export const AddCustomerForm: React.FC<IProps> = ({ onSubmit }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    setValue,
    getValues,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const err = {
    clientDetails: useMemo(
      () => ({
        name: errors.name,
        email: errors.email,
        deferral_days: errors.deferral_days,
        credit_limit: errors.credit_limit,
      }),
      [errors.name, errors.email, errors.deferral_days, errors.credit_limit]
    ),

    organization: useMemo(
      () => ({
        organization: errors.organization,
      }),
      [errors.organization]
    ),

    invoiceEmails: useMemo(
      () => ({
        invoice_emails: errors.invoice_emails,
      }),
      [errors.invoice_emails]
    ),

    bankAccounts: useMemo(
      () => ({
        bank_accounts: errors.bank_accounts,
      }),
      [errors.bank_accounts]
    ),
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="AddCustomerForm">
      <ClientDetails register={register} errors={err.clientDetails} />

      <Organization register={register} errors={err.organization} />

      <BankAccounts
        control={control}
        register={register}
        getValues={getValues}
        setValue={setValue}
        errors={err.bankAccounts}
      />

      <InvoiceEmails
        control={control}
        register={register}
        errors={err.invoiceEmails}
      />

      <Metadata
        control={control}
        register={register}
      />

      <Button type="submit" variant="contained">
        Создать
      </Button>
    </Form>
  );
};
