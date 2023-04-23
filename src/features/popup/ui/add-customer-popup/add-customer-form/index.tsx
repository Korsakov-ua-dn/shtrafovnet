import { useCallback, useMemo, useRef } from "react";
import Button from "@mui/material/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Form } from "@/shared/ui/form-component";

import { InvoiceEmails, invoice_emails } from "../invoice-emails";
import { ClientDetails, client_details } from "../client-details";

import "./style.scss";

export const AddCustomerForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    // reValidateMode: "onSubmit",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // onClose();
    // console.log(data["invoice_emails"]?.map((el) => el.name)); // prepare emails
    console.log(JSON.stringify(data, null, 4));
  };

  const clientDetailsErrors = useMemo(
    () => ({ name: errors.name, email: errors.email }),
    [errors.name, errors.email]
  );
  const invoiceEmailsErrors = useMemo(
    () => ({
      email: errors.email,
      invoice_emails: errors.invoice_emails,
    }),
    [errors.email, errors.invoice_emails]
  );

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="AddCustomerForm">
      <ClientDetails
        control={control}
        register={register}
        errors={clientDetailsErrors}
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

const schema = yup.object().shape({
  ...client_details,
  ...invoice_emails,
});

export type FormData = yup.InferType<typeof schema>;
