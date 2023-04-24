import { useEffect } from "react";
import {
  useFieldArray,
  Control,
  UseFormRegister,
  FieldErrors,
  UseFormSetValue,
  UseFormGetValues,
} from "react-hook-form";

import { typedMemo } from "@/shared/hocs";
import {
  Fieldset,
  FieldWrapper,
  Input,
  InputsBlock,
  ButtonDashed,
  SwitchMUI,
  Border
} from "@/shared/ui/form-component";

import type { FormData } from "../add-customer-form/";

interface IProps {
  control: Control<FormData>;
  register: UseFormRegister<FormData>;
  getValues: UseFormGetValues<FormData>;
  setValue: UseFormSetValue<FormData>;
  errors: FieldErrors<FormData>;
}

export const BankAccounts: React.FC<IProps> = typedMemo(
  ({ control, register, getValues, setValue, errors }) => {
    const { fields, append, remove } = useFieldArray({
      name: "bank_accounts",
      control,
    });

    const bank_accounts = getValues().bank_accounts;

    useEffect(() => {
      append({
        name: "",
        account_number: "",
        bik: "",
        corr_account_number: "",
        is_default: true,
      });
      return () => remove(0); // исправляет двойное добавление default field из-за strict mode
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <Fieldset legend="Банковские счета">
        {fields.map((item, i) => (
          <FieldWrapper key={item.id}>
            <InputsBlock>
              <Input
                {...register(`bank_accounts.${i}.name` as const)}
                error={!!errors["bank_accounts"]?.[i]?.name}
                helperText={errors["bank_accounts"]?.[i]?.name?.message || " "}
                label="Название счета"
                className="AddCustomerForm__input"
              />

              <Input
                {...register(`bank_accounts.${i}.account_number` as const)}
                error={!!errors["bank_accounts"]?.[i]?.account_number}
                helperText={
                  errors["bank_accounts"]?.[i]?.account_number?.message || " "
                }
                label="Номер счета"
                className="AddCustomerForm__input"
              />

              <Input
                {...register(`bank_accounts.${i}.bik` as const)}
                error={!!errors["bank_accounts"]?.[i]?.bik}
                helperText={errors["bank_accounts"]?.[i]?.bik?.message || " "}
                label="Бик счета"
                className="AddCustomerForm__input"
              />

              <Input
                {...register(`bank_accounts.${i}.corr_account_number` as const)}
                error={!!errors["bank_accounts"]?.[i]?.corr_account_number}
                helperText={
                  errors["bank_accounts"]?.[i]?.corr_account_number?.message ||
                  " "
                }
                label="Корр. номер счета"
                className="AddCustomerForm__input"
              />

              <SwitchMUI
                {...register(`bank_accounts.${i}.is_default` as const)}
                checked={item.is_default}
                disabled={item.is_default}
                onChange={() => {
                  const newArr = bank_accounts?.map((obj, index) =>
                    i === index
                      ? { ...obj, is_default: true }
                      : { ...obj, is_default: false }
                  );
                  setValue("bank_accounts", newArr);
                }}
              />
            </InputsBlock>

            {i > 0 && ( // кнопка удаления для всех кроме дефолтного счета
              <ButtonDashed
                type="button"
                onClick={() => remove(i)}
                action="remove"
              >
                - Удалить счет
              </ButtonDashed>
            )}
          </FieldWrapper>
        ))}

        <Border />

        <ButtonDashed
          type="button"
          onClick={() =>
            append({
              name: "",
              account_number: "",
              bik: "",
              corr_account_number: "",
              is_default: false,
            })
          }
        >
          + Добавить еще счет
        </ButtonDashed>
      </Fieldset>
    );
  }
);
