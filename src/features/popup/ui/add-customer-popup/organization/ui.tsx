import { typedMemo } from "@/shared/hocs";
import { UseFormRegister, FieldErrors } from "react-hook-form";

import { Fieldset, Input } from "@/shared/ui/form-component";

import type { FormData } from "../add-customer-form";

interface IProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export const Organization: React.FC<IProps> = typedMemo(
  ({ register, errors }) => {
    return (
      <Fieldset legend="Детали Организации">
        <Input
          {...register("organization.name" as const)}
          error={!!errors["organization"]?.["name"]}
          helperText={errors["organization"]?.["name"]?.message || " "}
          label="Название организации"
          className="AddCustomerForm__input"
        />

        <Input
          {...register("organization.inn" as const)}
          error={!!errors["organization"]?.["inn"]}
          helperText={errors["organization"]?.["inn"]?.message || " "}
          label="ИНН организации"
          className="AddCustomerForm__input"
        />

        <Input
          {...register("organization.kpp" as const)}
          error={!!errors["organization"]?.["kpp"]}
          helperText={errors["organization"]?.["kpp"]?.message || " "}
          label="КПП организации"
          className="AddCustomerForm__input"
        />

        <Input
          {...register("organization.ogrn" as const)}
          error={!!errors["organization"]?.["ogrn"]}
          helperText={errors["organization"]?.["ogrn"]?.message || " "}
          label="ОРГН организации"
          className="AddCustomerForm__input"
        />

        <Input
          {...register("organization.addr" as const)}
          error={!!errors["organization"]?.["addr"]}
          helperText={errors["organization"]?.["addr"]?.message || " "}
          label="Юридический адрес"
          className="AddCustomerForm__input"
        />
      </Fieldset>
    );
  }
);
