import type {
  ChangeEventHandler,
  Dispatch,
  FC,
  MouseEventHandler,
  SetStateAction,
} from 'react';

import css from './FilterBar.module.css';

type Props = { setFilter: Dispatch<SetStateAction<string>>; filter: string };
type Handlers = {
  input: ChangeEventHandler<HTMLInputElement>;
  reset: MouseEventHandler<HTMLButtonElement>;
};
const FilterBar: FC<Props> = ({ filter, setFilter }) => {
  const handle: Handlers = {
    input: ({ currentTarget }) => {
      setFilter(currentTarget.value);
    },
    reset: () => {
      setFilter('');
    },
  };

  return (
    <div className={css.wrapper}>
      <input
        className={css.input}
        placeholder='Filter by name or email'
        type='text'
        value={filter}
        onInput={handle.input}
      />
      <button className={css.button} type='button' onClick={handle.reset}>
        Reset
      </button>
    </div>
  );
};

export default FilterBar;
