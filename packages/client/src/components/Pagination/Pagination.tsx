import type { IPagination } from '@shared/types';

import paginationControls from '../../helpers/paginationControls.ts';
import PaginationButton from '../PaginationButton/PaginationButton.tsx';

import css from './Pagination.module.css';

type PaginationProps = {
  pagination: IPagination;
  setPage: (value: number) => void;
  prevPage: () => void;
  nextPage: () => void;
};

const Pagination: React.FC<PaginationProps> = ({
  pagination,
  setPage,
  prevPage,
  nextPage,
}): React.ReactNode => {
  const setPageHandler = (event: React.MouseEvent<HTMLSpanElement>): void => {
    const value = event.currentTarget.textContent;
    if (!value) return;

    const isString = typeof value === 'string';
    if (!isString) return;

    const isNumber = !Number.isNaN(parseInt(value));
    if (!isNumber) return;

    setPage(parseInt(value));
  };

  const { page, totalPages, hasNextPage, hasPrevPage } = pagination;

  const controls = paginationControls(page, totalPages);

  return (
    <div className={css.paginationWrapper}>
      {hasPrevPage && (
        <PaginationButton
          textContent='Prev'
          isActive={false}
          handleClick={prevPage}
        />
      )}

      {controls.map((content, i) => {
        const isActive = content === page;
        return (
          <PaginationButton
            key={i}
            textContent={content}
            isActive={isActive}
            handleClick={setPageHandler}
          />
        );
      })}

      {hasNextPage && (
        <PaginationButton
          textContent='Next'
          isActive={false}
          handleClick={nextPage}
        />
      )}
    </div>
  );
};

export default Pagination;
