import * as yup from 'yup';

export const schema = yup
  .object({
    name: yup
      .string()
      .required('Обязательное поле')
      .min(2, 'Минимальное количество - две буквы')
      .max(30, 'Допустимое количество букв - 30')
      .matches(/^[А-яа-я]+$/g, 'Пожалуйста используйте киррилица')
      .trim(),

    phone: yup
      .string()
      .required('Обязательное поле')
      .test(
        'формат номера телефона',
        'Формат номера телефона 7xxxxxxxxxx',
        (value) => {
          if (value.toString().match(/^7\d{10}$/gm)) {
            return true;
          } else return false;
        }
      ),

    email: yup
      .string()
      .required('Обязательное поле')
      .matches(/^[A-za-z@-_.]+$/g, 'Пожалуйста используйте латиницу')
      .min(6, 'Формат для email x@x.xx'),
  })
  .required();

export type FormData = yup.InferType<typeof schema>;
