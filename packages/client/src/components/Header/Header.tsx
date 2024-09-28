import { NavLink } from 'react-router-dom';

import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink className={css.link} to={'/'}>
          Home
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
