import { typedMemo } from "@/shared/hocs";
import {
  useFieldArray,
  Control,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";

import {
  Fieldset,
  FieldWrapper,
  Input,
  ButtonDashed,
  Border,
} from "@/shared/ui/form-component";

import type { FormData } from "../add-customer-form";
import { useEffect } from "react";

interface IProps {
  control: Control<FormData>;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export const InvoiceEmails: React.FC<IProps> = typedMemo(
  ({ control, register, errors }) => {
    const { fields, append, remove } = useFieldArray({
      name: "invoice_emails",
      control,
    });

    console.log("Render InvoiceEmails");

    useEffect(() => {
      append({ name: "" });
      return () => remove(0); // исправляет двойное добавление default field из-за strict mode
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <Fieldset legend="Emails для счетов">
        {fields.map((item, i) => (
          <FieldWrapper key={item.id}>
            <Input
              {...register(`invoice_emails.${i}.name` as const)}
              type="email"
              error={!!errors["invoice_emails"]?.[i]?.name}
              helperText={errors["invoice_emails"]?.[i]?.name?.message || " "}
              label="Email"
              className="AddCustomerForm__input"
            />
            {i > 0 && ( // кнопка удаления для всех кроме дефолтного email
              <ButtonDashed
                type="button"
                onClick={() => remove(i)}
                action="remove"
              >
                - Удалить email
              </ButtonDashed>
            )}
          </FieldWrapper>
        ))}

        <Border />

        <ButtonDashed type="button" onClick={() => append({ name: "" })}>
          + Добавить еще email
        </ButtonDashed>
      </Fieldset>
    );
  }
);
