import { useParams } from 'react-router-dom';

import useFetchEventById from '../../hooks/useFetchEventById.ts';
import ParticipantList from '../../components/ParticipantList/ParticipantList.tsx';

import type { FC, ReactNode } from 'react';

import css from './EventPage.module.css';

const EventPage: FC<null> = (): ReactNode => {
  const { id } = useParams();

  const { event, error } = useFetchEventById(id!);

  if (error) return <p>{error.message}</p>;
  if (event)
    return (
      <div className={css.wrapper}>
        <h4 className={css.title}>"{event.title}" participants:</h4>
        <ParticipantList participants={event.participants} />
      </div>
    );
};

export default EventPage;
