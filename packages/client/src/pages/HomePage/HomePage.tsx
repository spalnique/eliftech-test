import usePages from '../../hooks/usePages.ts';
import useFetchEvents from '../../hooks/useFetchEvents.ts';

import EventList from '../../components/EventList/EventList.tsx';
import Pagination from '../../components/Pagination/Pagination.tsx';

import type { FC, ReactNode } from 'react';

import css from './HomePage.module.css';

const HomePage: FC = (): ReactNode => {
  const perPage = 12;
  const { page, setPage, prevPage, nextPage } = usePages();
  const { data, pagination, loading, error } = useFetchEvents(page, perPage);

  if (error) return <p>{error.message}</p>;

  return (
    <div className={css.wrapper}>
      <h4 className={css.title}>Events</h4>
      {loading && <p>Loading...</p>}
      {data && <EventList events={data} />}
      {pagination && (
        <Pagination
          pagination={pagination}
          setPage={setPage}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      )}
    </div>
  );
};

export default HomePage;
