import { useState } from 'react';
import {
  SORT_BY,
  SORT_ORDER,
  type IQuery,
} from '../../../shared/types/index.ts';

const useQuery = () => {
  const [query, setQuery] = useState<IQuery>({
    page: 1,
    perPage: 12,
    sortBy: SORT_BY.DATE,
    sortOrder: SORT_ORDER.ASC,
  });
  const nextPage = () => {
    setQuery({ ...query, page: query.page! + 1 });
  };
  const prevPage = () => {
    setQuery({ ...query, page: query.page! - 1 });
  };
  return { query, nextPage, prevPage, setQuery };
};

export default useQuery;
