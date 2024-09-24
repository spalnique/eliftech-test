import type { FC, PropsWithChildren, ReactNode } from 'react';

import css from './Layout.module.css';

const Layout: FC<PropsWithChildren> = ({ children }): ReactNode => {
  return <div className={css.container}>{children}</div>;
};

export default Layout;
