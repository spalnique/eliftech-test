import type { IPagination } from '@shared/types';

import paginationControls from '../../helpers/paginationControls.ts';
import PaginationButton from '../PaginationButton/PaginationButton.tsx';

import type { FC, MouseEventHandler } from 'react';

import css from './Pagination.module.css';
import { useAppContext } from '../../hooks/useAppContext.ts';

type Props = {
  pagination: IPagination;
};

const Pagination: FC<Props> = ({ pagination }) => {
  const { query, setQuery, prevPage, nextPage } = useAppContext();

  const setPageHandler: MouseEventHandler<HTMLButtonElement> = ({
    currentTarget,
  }) => {
    if (currentTarget.textContent === '...') return;

    setQuery({ ...query, page: parseInt(currentTarget.value) });
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
