import clsx from 'clsx';

import {
  useCallback,
  type Dispatch,
  type FC,
  type MouseEventHandler,
  type SetStateAction,
} from 'react';

import {
  DICT,
  SORT_BY,
  SORT_ORDER,
  VIEW_MODE,
  type IEventDocument,
} from '../../../../shared/types/index.ts';

import css from './SortBar.module.css';
import { useAppContext } from '../../hooks/useAppContext.ts';

type Props = {
  setEvents: Dispatch<SetStateAction<IEventDocument[]>>;
};

type Handlers = {
  click: MouseEventHandler<HTMLButtonElement>;
  paginate: MouseEventHandler<HTMLButtonElement>;
};

const SortBar: FC<Props> = ({ setEvents }) => {
  const { viewMode, setViewMode, query, setQuery } = useAppContext();
  const basePerPage = Math.ceil((window.innerHeight - 180) / 200) * 3 - 3;

  const perPageValues = useCallback(
    () => Array.from({ length: 3 }, (_x, i) => (i + 1) * basePerPage),
    []
  )();

  const handle: Handlers = {
    click: ({ currentTarget }) => {
      if (viewMode === VIEW_MODE.scroll) {
        setEvents([]);
      }
      setQuery({
        ...query,
        page: 1,
        [currentTarget.name]: currentTarget.value,
      });

      const tId = setTimeout(() => {
        window.scrollTo({ top: 70, behavior: 'smooth' });
        clearTimeout(tId);
      }, 500);
    },

    paginate: ({ currentTarget }) => {
      if (currentTarget.name === VIEW_MODE.paginate) {
        setEvents([]);
        setQuery({ ...query, page: 1, perPage: basePerPage });
      }
      if (currentTarget.name === VIEW_MODE.scroll) {
        setEvents([]);
        setQuery({ ...query, page: 1, perPage: 24 });
      }
      setViewMode(currentTarget.value as VIEW_MODE);
    },
  };

  return (
    <aside className={css.aside}>
      <fieldset className={css.fieldsetWrapper}>
        <label className={css.label}>View mode</label>
        <div className={css.viewModeWrapper}>
          {Object.values(VIEW_MODE).map((value) => (
            <button
              key={value}
              className={clsx(css.button, {
                [css.active]: viewMode === value,
              })}
              value={value}
              type='button'
              name={value}
              onClick={handle.paginate}>
              {value}
            </button>
          ))}
        </div>
      </fieldset>
      <fieldset className={css.fieldsetWrapper}>
        <label className={css.label}>Sort by</label>
        <div className={css.sortByWrapper}>
          {Object.values(SORT_BY).map((value) => (
            <button
              key={value}
              className={clsx(css.button, {
                [css.active]: query.sortBy === value,
              })}
              value={value}
              type='button'
              name={DICT.sortBy}
              onClick={handle.click}>
              {value}
            </button>
          ))}
        </div>
      </fieldset>
      <fieldset className={css.fieldsetWrapper}>
        <label className={css.label}>Sort order</label>
        <div className={css.sortOrderWrapper}>
          {Object.values(SORT_ORDER).map((value) => (
            <button
              key={value}
              className={clsx(css.button, {
                [css.active]: query.sortOrder === value,
              })}
              value={value}
              type='button'
              name={DICT.sortOrder}
              onClick={handle.click}>
              {`${value}ending`}
            </button>
          ))}
        </div>
      </fieldset>
      {viewMode === VIEW_MODE.paginate && (
        <fieldset className={css.fieldsetWrapper}>
          <label className={css.label}>Results per page</label>
          <div className={css.perPageWrapper}>
            {perPageValues.map((value) => (
              <button
                key={value}
                className={clsx(css.button, {
                  [css.active]: String(query.perPage) === String(value),
                })}
                value={value}
                type='button'
                name={DICT.perPage}
                onClick={handle.click}>
                {value}
              </button>
            ))}
          </div>
        </fieldset>
      )}
    </aside>
  );
};

export default SortBar;
