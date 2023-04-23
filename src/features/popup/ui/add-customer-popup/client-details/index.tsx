import { typedMemo } from "@/shared/hocs";
import { Control, UseFormRegister, FieldErrors } from "react-hook-form";
import * as yup from "yup";

import { Fieldset, Input } from "@/shared/ui/form-component";

import type { FormData } from "../add-customer-form";

interface IProps {
  control: Control<FormData>;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export const ClientDetails: React.FC<IProps> = typedMemo(
  ({ control, register, errors }) => {
    console.log("Render Client");

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

        {/* <Input
        {...register("name" as const)}
        error={!!errors["name"]}
        helperText={errors["name"]?.message || " "}
        label="Email"
        className="AddCustomerForm__input"
      />

      <Input
        {...register("name" as const)}
        error={!!errors["name"]}
        helperText={errors["name"]?.message || " "}
        label="Email"
        className="AddCustomerForm__input"
      /> */}
      </Fieldset>
    );
  }
);

export const client_details = {
  ["name"]: yup.string().required("Введите Имя"),
  ["email"]: yup.string().required("Введите Email"),
};
