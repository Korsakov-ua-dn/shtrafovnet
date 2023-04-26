import type { UseFormRegister, FieldErrors } from "react-hook-form";

import { typedMemo } from "@/shared/hocs";

import { Fieldset, Input } from "@/shared/ui/form-component";

import type { FormData } from "../add-customer-form";

interface IProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export const ClientDetails: React.FC<IProps> = typedMemo(
  ({ register, errors }) => {
    return (
      <Fieldset legend="Детали Клиента">
        <Input
          {...register("name" as const)}
          error={!!errors["name"]}
          helperText={errors["name"]?.message || " "}
          label="Имя"
          className="AddCustomerForm__input"
        />

        <Input
          {...register("email" as const)}
          type="email"
          error={!!errors["email"]}
          helperText={errors["email"]?.message || " "}
          label="Email"
          className="AddCustomerForm__input"
        />

        <Input
          {...register("deferral_days" as const)}
          error={!!errors["deferral_days"]}
          helperText={errors["deferral_days"]?.message || " "}
          label="Дней отсрочки"
          className="AddCustomerForm__input"
        />

        <Input
          {...register("credit_limit" as const)}
          error={!!errors["credit_limit"]}
          helperText={errors["credit_limit"]?.message || " "}
          label="Кредитный лимит"
          className="AddCustomerForm__input"
        />
      </Fieldset>
    );
  }
);
