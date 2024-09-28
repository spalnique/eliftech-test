import { NavLink, useParams } from 'react-router-dom';
import { useState } from 'react';

import useFetchEventById from '../../hooks/useFetchEventById.ts';
import filterParticipants from '../../helpers/filterParticipants.ts';
import FilterBar from '../../components/FilterBar/FilterBar.tsx';
import ParticipantList from '../../components/ParticipantList/ParticipantList.tsx';

import type { FC } from 'react';

import css from './EventPage.module.css';
import StatsBar from '../../components/StatsBar/StatsBar.tsx';

const EventPage: FC = () => {
  const { id } = useParams();
  const { event, error } = useFetchEventById(id!);
  const [filter, setFilter] = useState<string>('');

  if (error) return <p>{error.message}</p>;
  if (event)
    return (
      <div className={css.wrapper}>
        <h4 className={css.title}>"{event.title}" participants:</h4>

        <div className={css.barsWrapper}>
          <FilterBar filter={filter} setFilter={setFilter} />
          <NavLink className={css.button} to={`/register/${id}`}>
            Register for this event
          </NavLink>
          <StatsBar participants={event.participants} />
        </div>
        <ParticipantList
          participants={filterParticipants(event.participants, filter)}
        />
      </div>
    );
};

export default EventPage;
