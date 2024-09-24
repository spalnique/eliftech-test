import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import type { FC, ReactNode } from 'react';

import { api_url } from '../../constants/index.ts';

import css from './RegisterForm.module.css';

type FormValues = {
  fullName: string;
  email: string;
  dob: string;
  source: string;
};

type Props = {
  id: string;
};

const RegisterForm: FC<Props> = ({ id }): ReactNode => {
  const [participant, setParticipant] = useState<FormValues | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const addParticipant = async (id: string) => {
      try {
        await axios.post(
          `${api_url}/event/participant/add`,
          { participant },
          { params: { id } }
        );

        setParticipant(null);
      } catch (err) {
        if (err instanceof AxiosError) setError(err);
        setParticipant(null);
        console.error(err);
      }
    };

    if (participant) addParticipant(id);
  }, [participant, id]);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: { fullName: '', email: '', dob: '', source: '' },
  });

  const onValid = (data: FormValues): void => {
    setParticipant(data);
    reset();
  };

  if (error) return <p>{error.message}</p>;

  return (
    <form className={css.formWrapper} onSubmit={handleSubmit(onValid)}>
      <fieldset className={css.inputWrapper}>
        <label className={css.label} htmlFor='fullName'>
          Full name
        </label>
        <input
          className={css.input}
          id='fullName'
          placeholder='First and last name'
          {...register('fullName')}
        />
        <label className={css.label} htmlFor='email'>
          Email
        </label>
        <input
          className={css.input}
          id='email'
          placeholder='example@mail.com'
          {...register('email')}
        />
        <label className={css.label} htmlFor='dob'>
          Date of birth
        </label>
        <input
          className={css.input}
          id='dob'
          type='date'
          {...register('dob')}
        />
      </fieldset>

      <div>
        <p className={css.label}>Where did you hear about this event?</p>
        <fieldset className={css.radioWrapper}>
          <div>
            <input
              className={css.input}
              id='social'
              type='radio'
              value='social'
              {...register('source')}
            />
            <label className={css.label} htmlFor='social'>
              Social media
            </label>
          </div>
          <div>
            <input
              className={css.input}
              id='friend'
              type='radio'
              value='friend'
              {...register('source')}
            />
            <label className={css.label} htmlFor='friend'>
              Friends
            </label>
          </div>
          <div>
            <input
              className={css.input}
              id='myself'
              type='radio'
              value='myself'
              {...register('source')}
            />
            <label className={css.label} htmlFor='myself'>
              Found myself
            </label>
          </div>
        </fieldset>
      </div>

      <button type='submit' className={css.button}>
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
