import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import {
  type IEventDocument,
  type IPagination,
  type IQuery,
} from '../../../shared/types/index.ts';

const useFetch = (query: IQuery) => {
  const [data, setData] = useState<IEventDocument[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const [pagination, setPagination] = useState<IPagination | null>(null);

  useEffect(() => {
    const fetchEvents = async (query: IQuery) => {
      try {
        setError(null);
        setLoading(true);

        const response = await axios.get(`http://localhost:3000/event`, {
          params: query,
        });

        const eventsData: IEventDocument[] = response.data.events;
        const paginationData: IPagination = response.data.pagination;

        setData(eventsData);
        setPagination(paginationData);
      } catch (error) {
        if (error instanceof AxiosError) setError(error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents(query);
  }, [query]);

  return { data, pagination, loading, error };
};

export default useFetch;
