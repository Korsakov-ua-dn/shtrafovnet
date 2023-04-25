import * as yup from "yup";

export const client_details = {
  "name": yup.string().required("Введите Имя"),
  "email": yup.string().required("Введите Email"),
  "deferral_days": yup
    .number()
    .typeError('Введите количество дней отсрочки')
    .required("Введите количество дней отсрочки")
    .min(0, "Дней отсрочки должна быть больше или равна 0")
    .integer("Значение должно быть целочисленное"),
  "credit_limit": yup
    .number()
    .typeError('Введите кредитный лимит')
    .required("Введите кредитный лимит")
    .min(0, "Кредитный лимит должен быть больше или равна 0")
    .integer("Значение должно быть целочисленное"),
};
