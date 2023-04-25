import * as yup from "yup";

export const organization = {
  "organization": yup.object().shape({
    "name": yup.string().required("Введите Название организации"),
    "inn": yup.string().required("Введите ИНН организации"),
    "kpp": yup.string().required("Введите КПП организации"),
    "ogrn": yup.string().required("Введите ОРГН организации"),
    "addr": yup.string().required("Введите Юридический адрес"),
  }),
};
