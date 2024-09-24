import { Link } from 'react-router-dom';

import type { IEventDocument } from '../../../../shared/types/index.ts';
import type { FC, ReactNode } from 'react';

import css from './EventItem.module.css';

type Props = { event: IEventDocument };

const EventItem: FC<Props> = ({ event }): ReactNode => {
  return (
    <li className={css.item}>
      <h5 className={css.title}>{event.title}</h5>
      <p className={css.desc}>{event.desc}</p>
      <div className={css.links}>
        <Link className={css.link} to={`/register/${event._id}`}>
          Register
        </Link>
        <Link className={css.link} to={`/event/${event._id}`}>
          View
        </Link>
      </div>
    </li>
  );
};

export default EventItem;
