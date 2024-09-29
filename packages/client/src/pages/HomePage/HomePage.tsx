import { useCallback, useEffect, type FC } from 'react';

import useFetchEvents from '../../hooks/useFetchEvents.ts';

import Loader from '../../components/Loader/Loader.tsx';
import EventList from '../../components/EventList/EventList.tsx';
import Pagination from '../../components/Pagination/Pagination.tsx';
import SortBar from '../../components/SortBar/SortBar.tsx';

import { VIEW_MODE } from '../../../../shared/types/index.ts';

import css from './HomePage.module.css';
import { useAppContext } from '../../hooks/useAppContext.ts';

const HomePage: FC = () => {
  const { query, viewMode, nextPage } = useAppContext();
  const { events, pagination, loading, error, setEvents } = useFetchEvents(
    viewMode,
    query
  );

  const handleScroll = useCallback(() => {
    const currentYPos = window.scrollY + window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const offset = 300;
    if (
      currentYPos >= docHeight - offset &&
      pagination?.hasNextPage &&
      !loading
    )
      nextPage();
  }, [nextPage, loading]);

  useEffect(() => {
    if (viewMode === VIEW_MODE.scroll && !loading) {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll, loading, viewMode]);

  if (error) return <p>{error.message}</p>;

  return (
    <div className={css.wrapper}>
      <SortBar setEvents={setEvents} />
      <div className={css.content}>
        <h4 className={css.title}>Events</h4>
        {viewMode !== VIEW_MODE.scroll && loading && <Loader />}
        {events.length !== 0 && pagination && <EventList events={events} />}
        {viewMode === VIEW_MODE.paginate && pagination && (
          <Pagination pagination={pagination} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
