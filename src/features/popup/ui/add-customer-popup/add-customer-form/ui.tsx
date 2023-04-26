import { useMemo } from "react";
import Button from "@mui/material/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { typedMemo } from "@/shared/hocs";
import { Form } from "@/shared/ui/form-component";

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

export const AddCustomerForm: React.FC<IProps> = typedMemo(({ onSubmit }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    setValue,
    getValues,
    trigger,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const err = {
    // объединил в единый объект ошибок для ClientDetails
    clientDetails: useMemo(
      () => ({
        name: errors.name,
        email: errors.email,
        deferral_days: errors.deferral_days,
        credit_limit: errors.credit_limit,
      }),
      [errors.name, errors.email, errors.deferral_days, errors.credit_limit]
    ),

    // для того что-бы результат валидации показывать пользователю сразу при вводе значения необходимо явно указать в deps все зависимоти и обновить объект ошибки
    organization: useMemo(
      () => ({
        organization: errors.organization,
      }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [
        errors.organization?.addr,
        errors.organization?.inn,
        errors.organization?.kpp,
        errors.organization?.name,
        errors.organization?.ogrn,
      ]
    ),
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="AddCustomerForm">
      <ClientDetails register={register} errors={err.clientDetails} />

      <Organization register={register} errors={err.organization} />

      <BankAccounts
        control={control}
        register={register}
        getValues={getValues}
        setValue={setValue}
        errors={errors.bank_accounts}
        trigger={trigger}
      />

      <InvoiceEmails
        control={control}
        register={register}
        errors={errors.invoice_emails}
        trigger={trigger}
      />

      <Metadata control={control} register={register} />

      <Button type="submit" variant="contained">
        Создать
      </Button>
    </Form>
  );
});
