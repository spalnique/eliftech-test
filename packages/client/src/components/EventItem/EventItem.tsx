import type { IEventDocument } from '../../../../shared/types/index.ts';
import css from './EventItem.module.css';

const EventItem: React.FC<{ event: IEventDocument }> = ({
  event,
}): React.ReactNode => {
  return (
    <li className={css.eventItem}>
      <p>{event.title}</p>
      <p>{event.desc}</p>
      <div>
        <button type='button'>Register</button>
        <button type='button'>View</button>
      </div>
    </li>
  );
};

export default EventItem;
