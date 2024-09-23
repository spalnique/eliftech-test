import clsx from 'clsx';

import css from './PaginationButton.module.css';
import type { FC, ReactNode, MouseEvent } from 'react';

type Props = {
  textContent: string | number;
  isActive: boolean;
  handleClick: (event: MouseEvent<HTMLElement>) => void;
};

const PaginationButton: FC<Props> = ({
  textContent,
  isActive,
  handleClick,
}): ReactNode => {
  return (
    <button
      className={clsx(css.button, { [css.active]: isActive })}
      type='button'
      onClick={handleClick}>
      {textContent}
    </button>
  );
};

export default PaginationButton;
