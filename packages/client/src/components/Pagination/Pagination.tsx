import type { IPagination } from '@shared/types';

import paginationControls from '../../helpers/paginationControls.ts';
import PaginationButton from '../PaginationButton/PaginationButton.tsx';

import type { FC, MouseEventHandler } from 'react';

import css from './Pagination.module.css';
import { useAppContext } from '../../hooks/useAppContext.ts';
import scrollToTop from '../../helpers/scrollToTop.ts';

type Props = {
  pagination: IPagination;
};

type Handlers = {
  set: MouseEventHandler<HTMLButtonElement>;
  next: () => void;
  prev: () => void;
};

const Pagination: FC<Props> = ({ pagination }) => {
  const { query, setQuery, prevPage, nextPage } = useAppContext();

  const handle: Handlers = {
    set: ({ currentTarget }) => {
      if (currentTarget.textContent === '...') return;
      setQuery({ ...query, page: parseInt(currentTarget.value) });
      scrollToTop();
    },
    next: () => {
      nextPage();
      scrollToTop();
    },
    prev: () => {
      prevPage();
      scrollToTop();
    },
  };

  const { page, totalPages, hasNextPage, hasPrevPage } = pagination;

  const controls = paginationControls(page, totalPages);

  return (
    <div className={css.paginationWrapper}>
      {hasPrevPage && (
        <PaginationButton
          textContent='Prev'
          isActive={false}
          handleClick={handle.prev}
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
            handleClick={handle.set}
          />
        );
      })}

      {hasNextPage && (
        <PaginationButton
          textContent='Next'
          isActive={false}
          handleClick={handle.next}
        />
      )}
    </div>
  );
};

export default Pagination;
