import type { IEventDocument } from '../../../../shared/types/index.ts';
import EventItem from '../EventItem/EventItem.tsx';
import css from './EventList.module.css';

const EventList: React.FC<{ events: IEventDocument[] }> = ({
  events,
}): React.ReactNode => {
  return (
    <ul className={css.eventList}>
      {events.map((event) => {
        return <EventItem event={event} key={event._id} />;
      })}
    </ul>
  );
};

export default EventList;
