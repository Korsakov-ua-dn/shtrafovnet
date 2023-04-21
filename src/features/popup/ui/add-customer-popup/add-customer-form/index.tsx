import Button from "@mui/material/Button";
import { SubmitHandler, useForm, useFieldArray } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Form,
  Fieldset,
  FieldWrapper,
  Input,
  ButtonDashed,
} from "@/shared/ui/form-component";

import "./style.scss";

export const AddCustomerForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // onClose();
    // console.log(data["invoice_emails"]?.map((el) => el.name)); // prepare emails
    console.log(JSON.stringify(data, null, 4));
  };

  const { fields, append, remove } = useFieldArray({
    name: "invoice_emails",
    control,
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="AddCustomerForm">
      <Fieldset legend="Emails для счетов">
        <Input
          {...register("email" as const)}
          type="email"
          error={!!errors["email"]}
          helperText={errors["email"]?.message || " "}
          label="Email"
          className="AddCustomerForm__input"
        />
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
            <ButtonDashed
              type="button"
              onClick={() => remove(i)}
              action="remove"
            >
              - Удалить email
            </ButtonDashed>
          </FieldWrapper>
        ))}
        <ButtonDashed onClick={() => append({ name: "" })}>
          + Добавить еще email
        </ButtonDashed>
      </Fieldset>

      <Button type="submit" variant="contained">
        Создать
      </Button>
    </Form>
  );
};

const schema = yup.object().shape({
  email: yup.string().required("Введите Email"),
  ["invoice_emails"]: yup.array().of(
    yup.object().shape({
      name: yup.string().required("Введите Email"),
    })
  ),
});

export type FormData = yup.InferType<typeof schema>;
