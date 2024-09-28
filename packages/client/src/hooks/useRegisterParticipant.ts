import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

import type { FormValues } from '../../../shared/types/index.ts';

import { api_url } from '../constants/index.ts';
import toast from 'react-hot-toast';

export const useRegisterParticipant = (id: string) => {
  const [participant, setParticipant] = useState<FormValues | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const addParticipant = async (id: string) => {
      try {
        await axios.post(
          `${api_url}/event/participant/add`,
          { participant },
          { params: { id } }
        );

        setParticipant(null);
        toast.success("You've been successfully registered to the event", {
          id,
          // duration: 20000,
        });
      } catch (err) {
        if (err instanceof AxiosError) {
          setError(err);
        }
        setParticipant(null);
        console.error(err);
      }
    };

    if (participant) {
      addParticipant(id);
    }
  }, [participant, id]);
  return { setParticipant, error };
};

export default useRegisterParticipant;
