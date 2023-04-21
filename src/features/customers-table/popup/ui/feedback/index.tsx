import React, { memo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Popup } from 'shared/ui/popup';
import { Button } from 'shared/ui/button';
import { Form } from 'shared/ui/form';
import Input from 'shared/ui/input';
import { Subtitle } from 'shared/ui/subtitle';

import { FormData, schema } from './validate-schema';
import './style.scss';

interface IProps {
  onClose: () => void;
}

export const Feedback: React.FC<IProps> = memo(({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    onClose();
    console.log(data);
  };
  return (
    <Popup onClose={onClose}>
      <Subtitle style={{ marginTop: '0' }}>Обратная связь</Subtitle>

      <Form onSubmit={handleSubmit(onSubmit)} className="feedback">
        <Input
          {...register('name')}
          error={!!errors.name}
          helperText={errors.name ? errors.name.message : ' '}
          label="Имя"
        />
        <Input
          {...register('phone')}
          type="tel"
          error={!!errors.phone}
          helperText={errors.phone ? errors.phone.message : ' '}
          label="Телефон"
        />
        <Input
          {...register('email')}
          type="email"
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ' '}
          label="Email"
        />
        <Button white type="submit">
          Отправить
        </Button>
      </Form>
    </Popup>
  );
});
