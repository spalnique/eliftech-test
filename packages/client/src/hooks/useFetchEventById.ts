import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { redirect } from 'react-router-dom';

import type { IEventDocument } from '../../../shared/types/index.ts';

import { api_url } from '../constants/index.ts';

const useFetchEventById = (id: string) => {
  const [event, setEvent] = useState<IEventDocument | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    if (!id) {
      redirect('/');
      return;
    }

    const fetchEvent = async (id: string) => {
      try {
        setError(null);
        const response = await axios.get(`${api_url}/event/${id}`);
        const data = response.data;
        setEvent(data.data as IEventDocument);
        console.log(data.data);
      } catch (err) {
        if (err instanceof AxiosError) setError(err);
        console.error(err);
      }
    };
    fetchEvent(id);
  }, [id]);
  return { event, error };
};

export default useFetchEventById;
