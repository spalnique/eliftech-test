import { useRegisterParticipant } from '../../hooks/useRegisterParticipant.ts';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { Link, useLocation, useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import Flatpickr from 'react-flatpickr';
import clsx from 'clsx';

import {
  useRef,
  type FC,
  type KeyboardEventHandler,
  type MouseEventHandler,
} from 'react';
import type { Hook as FlatPickrHook } from 'flatpickr/dist/types/options';
import type { FormValues } from '../../../../shared/types/index.ts';

import { registerSchema } from '../../validation/index.ts';

import 'flatpickr/dist/themes/light.css';
import css from './RegisterForm.module.css';

enum Source {
  social = 'social',
  friend = 'friend',
  myself = 'myself',
}

// type Props = {
//   id: string;
// };

type Handlers = {
  submit: SubmitHandler<FormValues>;
  chooseDate: FlatPickrHook;
  clearError: KeyboardEventHandler<HTMLInputElement>;
  selectSource: MouseEventHandler<HTMLButtonElement>;
};

const RegisterForm: FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  const { setParticipant, error } = useRegisterParticipant(id as string);
  const {
    control,
    register,
    setValue,
    getValues,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      fullName: '',
      email: '',
      source: Source.social,
    },
    resolver: yupResolver(registerSchema),
    reValidateMode: 'onSubmit',
  });

  const handle: Handlers = {
    submit: (data) => {
      setParticipant(data);
      reset();
    },
    chooseDate: (_date, dateString) => {
      setValue('dob', dateString);
      clearErrors('dob');
    },
    selectSource: ({ currentTarget }) => {
      setValue(currentTarget.name as keyof FormValues, currentTarget.value, {
        shouldValidate: true,
      });
    },
    clearError: ({ currentTarget }) => {
      if (currentTarget.value.length < 2) {
        clearErrors(currentTarget.name as keyof FormValues);
      }
    },
  };

  if (error) return <p>{error.message}</p>;

  return (
    <form className={css.formWrapper} onSubmit={handleSubmit(handle.submit)}>
      <fieldset className={css.inputWrapper}>
        <label className={css.label} htmlFor='fullName'>
          Full name
          <input
            className={css.input}
            id='fullName'
            placeholder={'First and last name'}
            onInput={handle.clearError}
            {...register('fullName')}
          />
          {errors.fullName && (
            <span className={css.error}>{errors.fullName?.message}</span>
          )}
        </label>
        <label className={css.label} htmlFor='email'>
          Email
          <input
            className={css.input}
            id='email'
            placeholder={'example@mail.com'}
            onInput={handle.clearError}
            {...register('email')}
          />
          {errors.email && (
            <span className={css.error}>{errors.email?.message}</span>
          )}
        </label>
        <label className={css.label} htmlFor='dob'>
          Date of birth
          <Controller
            name={'dob'}
            control={control}
            render={({ field }) => (
              <Flatpickr
                placeholder='Your date of birth'
                options={{
                  maxDate: new Date().setFullYear(
                    new Date().getFullYear() - 14
                  ),
                  minDate: new Date().setFullYear(
                    new Date().getFullYear() - 100
                  ),
                }}
                required={true}
                className={css.input}
                value={field.value}
                onChange={handle.chooseDate}
                onInput={handle.clearError}
              />
            )}
          />
          {errors.dob && (
            <span className={css.error}>{errors.dob?.message}</span>
          )}
        </label>
      </fieldset>
      <div>
        <p className={css.label}>Where did you hear about this event?</p>
        <fieldset className={css.radioWrapper}>
          {Object.values(Source).map((value) => (
            <button
              key={value}
              type='button'
              name='source'
              value={value}
              onClick={handle.selectSource}
              className={clsx(css.button, {
                [css.active]: getValues('source') === value,
              })}>
              {value}
            </button>
          ))}
        </fieldset>
      </div>

      <button type='submit' className={css.button}>
        Register
      </button>
      <Link className={css.back} to={backLinkRef.current}>
        Back
      </Link>
    </form>
  );
};

export default RegisterForm;
