import { redirect, useParams } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm/RegisterForm.tsx';

import type { FC, ReactNode } from 'react';

import css from './RegisterPage.module.css';

const RegisterPage: FC<null> = (): ReactNode => {
  const { id } = useParams();

  if (!id) {
    redirect('/');
    return;
  }

  return (
    <div className={css.wrapper}>
      <h4 className={css.title}>Event registration</h4>
      <RegisterForm id={id} />
    </div>
  );
};

export default RegisterPage;
