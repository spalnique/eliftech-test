import clsx from 'clsx';

import css from './PaginationButton.module.css';
import type { FC, ReactNode, MouseEvent } from 'react';

type Props = {
  value?: number;
  textContent: string;
  isActive: boolean;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

const PaginationButton: FC<Props> = ({
  value,
  textContent,
  isActive,
  handleClick,
}): ReactNode => {
  return (
    <button
      className={clsx(css.button, { [css.active]: isActive })}
      type='button'
      value={value}
      onClick={handleClick}>
      {textContent}
    </button>
  );
};

export default PaginationButton;
