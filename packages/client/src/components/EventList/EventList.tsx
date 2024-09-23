import EventItem from '../EventItem/EventItem.tsx';

import type { IEventDocument } from '../../../../shared/types/index.ts';
import type { FC, ReactNode } from 'react';

import css from './EventList.module.css';

type Props = { events: IEventDocument[] };

const EventList: FC<Props> = ({ events }): ReactNode => {
  return (
    <ul className={css.list}>
      {events.map((event) => {
        return <EventItem event={event} key={event._id} />;
      })}
    </ul>
  );
};

export default EventList;
