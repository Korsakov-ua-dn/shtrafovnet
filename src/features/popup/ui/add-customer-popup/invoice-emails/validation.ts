import * as yup from "yup";

export const invoice_emails = {
  "invoice_emails": yup.array().of(
    yup.object().shape({
      name: yup.string().required("Введите Email"),
    })
  ),
};
