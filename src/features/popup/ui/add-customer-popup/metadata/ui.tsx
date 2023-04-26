import { useCallback } from "react";
import { useFieldArray, Control, UseFormRegister } from "react-hook-form";

import { typedMemo } from "@/shared/hocs";
import {
  Fieldset,
  Input,
  ButtonDashed,
  Border,
} from "@/shared/ui/form-component";

import type { FormData } from "../add-customer-form/";

import "./style.scss";

interface IProps {
  control: Control<FormData>;
  register: UseFormRegister<FormData>;
}

export const Metadata: React.FC<IProps> = typedMemo(({ control, register }) => {
  const { fields, append, remove } = useFieldArray({
    name: "metadata",
    control,
  });

  const addMetaHandler = useCallback(
    () => append({ key: "", value: "" }),
    [append]
  );

  return (
    <Fieldset legend="Meta">
      <div className="MetaTable">
        <div
          className="MetaTable__row"
          style={{ backgroundColor: "aliceblue" }}
        >
          <div className="MetaTable__key">Ключ</div>
          <div className="MetaTable__value">Значение</div>
          <div className="MetaTable__remove" />
        </div>

        {!fields.length && <div className="MetaTable__nodata">No data</div>}

        {fields.map((item, i) => (
          <div key={item.id} className="MetaTable__row">
            <div className="MetaTable__key">
              <Input {...register(`metadata.${i}.key` as const)} />
            </div>

            <div className="MetaTable__value">
              <Input {...register(`metadata.${i}.value` as const)} />
            </div>

            <div className="MetaTable__remove">
              <ButtonDashed
                type="button"
                onClick={() => remove(i)}
                action="remove"
              >
                X
              </ButtonDashed>
            </div>
          </div>
        ))}
      </div>

      <Border />

      <ButtonDashed type="button" onClick={addMetaHandler}>
        + Добавить еще ключ - значение
      </ButtonDashed>
    </Fieldset>
  );
});
