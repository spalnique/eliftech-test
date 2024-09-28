import type { FC, PropsWithChildren, ReactNode } from 'react';

import css from './Layout.module.css';
import Header from '../Header/Header.tsx';

const Layout: FC<PropsWithChildren> = ({ children }): ReactNode => {
  return (
    <>
      <Header />
      <div className={css.container}>{children}</div>
    </>
  );
};

export default Layout;
