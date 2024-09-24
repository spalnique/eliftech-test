import clsx from 'clsx';

import type { FC, MouseEventHandler, ReactNode } from 'react';

import {
  DICT,
  SORT_BY,
  SORT_ORDER,
  type IQuery,
} from '../../../../shared/types/index.ts';

import css from './SortBar.module.css';

type Props = {
  setQuery: (query: IQuery) => void;
  query: IQuery;
};

const SortBar: FC<Props> = ({ query, setQuery }): ReactNode => {
  const perPageValues = [12, 24, 36, 48];

  const handleClick: MouseEventHandler<HTMLFieldSetElement> = ({
    currentTarget,
    target,
  }) => {
    if (!(target instanceof HTMLButtonElement)) return;
    setQuery({
      ...query,
      [currentTarget.name]: target.value,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside className={css.aside}>
      <fieldset
        className={css.fieldsetWrapper}
        name={DICT.sortBy}
        onClick={handleClick}>
        <label className={css.label}>Sort by</label>
        <div className={css.sortByWrapper}>
          {Object.values(SORT_BY).map((value) => (
            <button
              key={value}
              className={clsx(css.button, {
                [css.active]: query.sortBy === value,
              })}
              value={value}
              type='button'>
              {value}
            </button>
          ))}
        </div>
      </fieldset>
      <fieldset
        className={css.fieldsetWrapper}
        name={DICT.sortOrder}
        onClick={handleClick}>
        <label className={css.label}>Sort order</label>
        <div className={css.sortOrderWrapper}>
          {Object.values(SORT_ORDER).map((value) => (
            <button
              key={value}
              className={clsx(css.button, {
                [css.active]: query.sortOrder === value,
              })}
              value={value}
              type='button'>
              {`${value}ending`}
            </button>
          ))}
        </div>
      </fieldset>
      <fieldset
        className={css.fieldsetWrapper}
        name={DICT.perPage}
        onClick={handleClick}>
        <label className={css.label}>Results per page</label>
        <div className={css.perPageWrapper}>
          {perPageValues.map((value) => (
            <button
              key={value}
              className={clsx(css.button, {
                [css.active]: String(query.perPage) === String(value),
              })}
              value={value}
              type='button'>
              {value}
            </button>
          ))}
        </div>
      </fieldset>
    </aside>
  );
};

export default SortBar;
