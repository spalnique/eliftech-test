import EventItem from '../EventItem/EventItem.tsx';

import { IEventDocument } from '../../../../shared/types/index.ts';
import { type FC } from 'react';

import css from './EventList.module.css';

type Props = {
  events: IEventDocument[];
};

const EventList: FC<Props> = ({ events }) => {
  return (
    <ul className={css.list}>
      {events.map((event) => {
        return <EventItem event={event} key={event._id} />;
      })}
    </ul>
  );
};

export default EventList;
