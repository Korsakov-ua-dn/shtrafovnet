import { useCallback, useEffect } from "react";
import {
  useFieldArray,
  Control,
  UseFormRegister,
  FieldErrors,
  UseFormSetValue,
  UseFormGetValues,
  UseFormTrigger
} from "react-hook-form";

import { typedMemo } from "@/shared/hocs";
import {
  Fieldset,
  FieldWrapper,
  Input,
  InputsBlock,
  ButtonDashed,
  SwitchMUI,
  Border,
} from "@/shared/ui/form-component";

import type { FormData } from "../add-customer-form/";

interface IProps {
  control: Control<FormData>;
  register: UseFormRegister<FormData>;
  getValues: UseFormGetValues<FormData>;
  setValue: UseFormSetValue<FormData>;
  errors: FieldErrors<FormData>;
  trigger: UseFormTrigger<FormData>;
}

export const BankAccounts: React.FC<IProps> = typedMemo(
  ({ control, register, getValues, setValue, errors, trigger }) => {
    const { fields, append, remove } = useFieldArray({
      name: "bank_accounts",
      control,
    });

    const addAccountHandler = useCallback(() => {
      append({
        name: "",
        account_number: "",
        bik: "",
        corr_account_number: "",
        is_default: false,
      });
    }, [append]);

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
        {fields.map((item, i) => {

          const cb = {
            toggleIsDefault: () => {
              bank_accounts?.forEach((obj, index) =>
                i === index
                  ? obj.is_default = true
                  : obj.is_default = false
              );
              setValue("bank_accounts", bank_accounts);
            },
  
            // Если удаляется счет с включенным свитчером, в активное состояние переводится свитчер первого счета
            removeAccountHandler: () => {
              if (item.is_default) { 
                setValue(
                  "bank_accounts",
                  bank_accounts.map((acc, i) =>
                    i === 0 ? { ...acc, is_default: true } : acc
                  )
                );
              }
              remove(i);
            },
          }

          // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
          //   const field = e.currentTarget.getAttribute('data-field');
          //   console.log(field);
            
          //   bank_accounts[i][field] = e.target.value;
          //   // setValue(`bank_accounts`, bank_accounts);
          //   trigger(`bank_accounts`); // trigger для улучшения UX т.к. форма возвращает мемоизированный объект ошибок
          // }

          return (
            <FieldWrapper key={item.id}>
              <InputsBlock>
                <Input
                  {...register(`bank_accounts.${i}.name` as const)}
                  error={!!errors?.[i]?.name}
                  helperText={
                    errors?.[i]?.name?.message || " "
                  }
                  label="Название счета"
                  className="AddCustomerForm__input"
                  inputProps={{'data-field': 'name'}}
                  onBlur={() => trigger(`bank_accounts`)}
                />

                <Input
                  {...register(`bank_accounts.${i}.account_number` as const)}
                  error={!!errors?.[i]?.account_number}
                  helperText={
                    errors?.[i]?.account_number?.message || " "
                  }
                  label="Номер счета"
                  className="AddCustomerForm__input"
                  inputProps={{'data-field': 'account_number'}}
                  onBlur={() => trigger(`bank_accounts`)}
                />

                <Input
                  {...register(`bank_accounts.${i}.bik` as const)}
                  error={!!errors?.[i]?.bik}
                  helperText={errors?.[i]?.bik?.message || " "}
                  label="Бик счета"
                  className="AddCustomerForm__input"
                  inputProps={{'data-field': 'bik'}}
                  onBlur={() => trigger(`bank_accounts`)}
                />

                <Input
                  {...register(
                    `bank_accounts.${i}.corr_account_number` as const
                  )}
                  error={!!errors?.[i]?.corr_account_number}
                  helperText={
                    errors?.[i]?.corr_account_number
                      ?.message || " "
                  }
                  label="Корр. номер счета"
                  className="AddCustomerForm__input"
                  inputProps={{'data-field': 'corr_account_number'}}
                  onBlur={() => trigger(`bank_accounts`)}
                />

                <SwitchMUI
                  {...register(`bank_accounts.${i}.is_default` as const)}
                  checked={item.is_default}
                  disabled={item.is_default}
                  onChange={cb.toggleIsDefault}
                />
              </InputsBlock>

              {i > 0 && ( // кнопка удаления для всех кроме дефолтного счета
                <ButtonDashed
                  type="button"
                  onClick={cb.removeAccountHandler}
                  action="remove"
                >
                  - Удалить счет
                </ButtonDashed>
              )}
            </FieldWrapper>
          );
        })}

        <Border />

        <ButtonDashed type="button" onClick={addAccountHandler}>
          + Добавить еще счет
        </ButtonDashed>
      </Fieldset>
    );
  }
);
