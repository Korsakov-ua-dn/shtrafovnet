import { useEffect } from "react";
import {
  useFieldArray,
  Control,
  UseFormRegister,
  FieldErrors,
  UseFormTrigger,
} from "react-hook-form";

import { typedMemo } from "@/shared/hocs";
import {
  Fieldset,
  FieldWrapper,
  Input,
  ButtonDashed,
  Border,
} from "@/shared/ui/form-component";

import type { FormData } from "../add-customer-form";

interface IProps {
  control: Control<FormData>;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  trigger: UseFormTrigger<FormData>;
}

export const InvoiceEmails: React.FC<IProps> = typedMemo(
  ({ control, register, errors, trigger }) => {
    const { fields, append, remove } = useFieldArray({
      name: "invoice_emails",
      control,
    });

    useEffect(() => {
      append({ name: "" });
      return () => remove(0); // исправляет двойное добавление default field из-за strict mode
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <Fieldset legend="Emails для счетов">
        {fields.map((item, i) => {
          return (
            <FieldWrapper key={item.id}>
              <Input
                {...register(`invoice_emails.${i}.name` as const)}
                type="email"
                error={!!errors?.[i]?.name}
                helperText={errors?.[i]?.name?.message || " "}
                label="Email"
                className="AddCustomerForm__input"
                onBlur={() => trigger(`invoice_emails`)} // trigger для улучшения UX т.к. форма возвращает мемоизированный объект ошибок
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
          );
        })}

        <Border />

        <ButtonDashed type="button" onClick={() => append({ name: "" })}>
          + Добавить еще email
        </ButtonDashed>
      </Fieldset>
    );
  }
);
