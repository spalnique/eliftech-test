import { redirect, useParams } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm/RegisterForm.tsx';

import type { FC } from 'react';

import css from './RegisterPage.module.css';

const RegisterPage: FC = () => {
  const { id } = useParams();

  if (!id) {
    redirect('/');
    return;
  }

  return (
    <div className={css.wrapper}>
      <h4 className={css.title}>Event registration</h4>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
