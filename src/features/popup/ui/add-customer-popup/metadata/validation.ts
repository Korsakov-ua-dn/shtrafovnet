import * as yup from "yup";

export const metadata = {
  metadata: yup.array().of(
    yup.object().shape({
      key: yup.string(),
      value: yup.string(),
    })
  ),
};
