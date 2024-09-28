import { Link, useLocation } from 'react-router-dom';

import type { IEventDocument } from '../../../../shared/types/index.ts';
import { type FC } from 'react';

import css from './EventItem.module.css';

type Props = { event: IEventDocument };

const EventItem: FC<Props> = ({ event }) => {
  const location = useLocation();

  return (
    <li className={css.item}>
      <h5 className={css.title}>{event.title}</h5>
      <p className={css.desc}>{event.desc}</p>
      <div className={css.links}>
        <Link
          className={css.link}
          to={`/register/${event._id}`}
          state={{ from: location.pathname }}>
          Register
        </Link>
        <Link
          className={css.link}
          to={`/event/${event._id}`}
          state={{ from: location.pathname }}>
          View
        </Link>
      </div>
    </li>
  );
};

export default EventItem;
