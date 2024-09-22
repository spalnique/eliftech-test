import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import type {
  IEventDocument,
  IPagination,
  IResponse,
} from '../../../shared/types/index.ts';

const useFetch = (page: number = 1, perPage: number = 12) => {
  const [data, setData] = useState<IEventDocument[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const [pagination, setPagination] = useState<IPagination | null>(null);

  useEffect(() => {
    const fetchEvents = async (page: number) => {
      try {
        setError(null);
        setLoading(true);

        const response = await axios.get(`http://localhost:3000/event`, {
          params: { page, perPage },
        });
        const data: IResponse = response.data;
        setData(data.data);
        setPagination(data.pagination);
      } catch (error) {
        if (error instanceof AxiosError) setError(error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents(page);
  }, [page, perPage]);

  return { data, pagination, loading, error };
};

export default useFetch;
