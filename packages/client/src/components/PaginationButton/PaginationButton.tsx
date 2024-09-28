import clsx from 'clsx';

import css from './PaginationButton.module.css';
import type { FC, MouseEventHandler } from 'react';

type Props = {
  value?: number;
  textContent: string;
  isActive: boolean;
  handleClick: MouseEventHandler<HTMLButtonElement>;
};

const PaginationButton: FC<Props> = ({
  value,
  textContent,
  isActive,
  handleClick,
}) => {
  return (
    <button
      className={clsx({
        [css.button]: textContent !== '...',
        [css.active]: isActive,
      })}
      type='button'
      value={value}
      onClick={handleClick}>
      {textContent}
    </button>
  );
};

export default PaginationButton;
