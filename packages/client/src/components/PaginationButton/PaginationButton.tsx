import clsx from 'clsx';

import css from './PaginationButton.module.css';

type PaginationButtonProps = {
  textContent: string | number;
  isActive: boolean;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
};

const PaginationButton: React.FC<PaginationButtonProps> = ({
  textContent,
  isActive,
  handleClick,
}): React.ReactNode => {
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
