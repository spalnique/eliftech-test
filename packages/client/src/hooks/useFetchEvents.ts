import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

import {
  VIEW_MODE,
  type IEventDocument,
  type IPagination,
  type IQuery,
} from '../../../shared/types/index.ts';

import { api_url } from '../constants/index.ts';

const useFetch = (viewMode: VIEW_MODE, query: IQuery) => {
  const [events, setEvents] = useState<IEventDocument[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const [pagination, setPagination] = useState<IPagination | null>(null);

  useEffect(() => {
    const fetchEvents = async (query: IQuery) => {
      const isScroll = viewMode === VIEW_MODE.scroll;

      try {
        setError(null);
        setLoading(true);

        const response = await axios.get(`${api_url}/event`, {
          params: query,
        });

        const eventsData: IEventDocument[] = response.data.events;
        const paginationData: IPagination = response.data.pagination;

        setEvents((prevEvents) => {
          // if (Math.ceil(prevEvents.length / query.perPage!) === query.page)
          //   return prevEvents;
          return isScroll ? [...prevEvents, ...eventsData] : eventsData;
        });
        setPagination(paginationData);
      } catch (error) {
        if (error instanceof AxiosError) setError(error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (!loading) fetchEvents(query);
  }, [query, viewMode]);

  return { events, pagination, loading, error, setEvents };
};

export default useFetch;
