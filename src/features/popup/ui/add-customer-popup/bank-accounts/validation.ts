import * as yup from "yup";

export const bank_accounts = {
    ["bank_accounts"]: yup.array().of(
      yup.object().shape({
        name: yup.string().required("Введите название счета"),
        account_number: yup.string().required("Введите номер счета"),
        bik: yup.string().required("Введите БИК счета"),
        corr_account_number: yup.string().required("Введите Корр. номер счета"),
        is_default: yup.boolean().required(),
      })
    ),
  };
  