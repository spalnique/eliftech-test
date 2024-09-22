import usePages from '../../hooks/usePages.ts';
import useFetch from '../../hooks/useFetch.ts';

import EventList from '../../components/EventList/EventList.tsx';
import Pagination from '../../components/Pagination/Pagination.tsx';

import css from './HomePage.module.css';

const HomePage = () => {
  const perPage = 12;
  const { page, setPage, prevPage, nextPage } = usePages();
  const { data, pagination, loading, error } = useFetch(page, perPage);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (!data) return <p>Nothing found</p>;

  return (
    <div className={css.container}>
      <EventList events={data} />
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
