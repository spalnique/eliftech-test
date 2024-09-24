import type { FC, ReactNode } from 'react';

import useQuery from '../../hooks/useQuery.ts';
import useFetchEvents from '../../hooks/useFetchEvents.ts';

import EventList from '../../components/EventList/EventList.tsx';
import Pagination from '../../components/Pagination/Pagination.tsx';
import SortBar from '../../components/SortBar/SortBar.tsx';

import css from './HomePage.module.css';

const HomePage: FC = (): ReactNode => {
  const { query, setQuery, prevPage, nextPage } = useQuery();
  const { data, pagination, loading, error } = useFetchEvents(query);

  if (error) return <p>{error.message}</p>;

  return (
    <div className={css.wrapper}>
      <SortBar query={query} setQuery={setQuery} />
      <div className={css.content}>
        <h4 className={css.title}>Events</h4>
        {loading && <p>Loading...</p>}
        {data && <EventList events={data} />}
        {pagination && (
          <Pagination
            query={query}
            pagination={pagination}
            setQuery={setQuery}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
