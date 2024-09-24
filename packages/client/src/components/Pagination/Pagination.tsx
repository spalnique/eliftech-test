import type { IPagination, IQuery } from '@shared/types';

import paginationControls from '../../helpers/paginationControls.ts';
import PaginationButton from '../PaginationButton/PaginationButton.tsx';

import type { FC, MouseEvent, ReactNode } from 'react';

import css from './Pagination.module.css';

type Props = {
  pagination: IPagination;
  query: IQuery;
  setQuery: (param: IQuery) => void;
  prevPage: () => void;
  nextPage: () => void;
};

const Pagination: FC<Props> = ({
  pagination,
  query,
  setQuery,
  prevPage,
  nextPage,
}): ReactNode => {
  const setPageHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setQuery({ ...query, page: parseInt(e.currentTarget.value) });
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
            textContent={content as string}
            value={content as number}
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
