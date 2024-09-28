import { type FC } from 'react';
import type { IParticipantDocument } from '../../../../shared/types/index.ts';

import css from './StatsBar.module.css';
import clsx from 'clsx';

type Props = {
  participants: IParticipantDocument[];
};

const registeredToday = (regDate: string): boolean => {
  const registrationDate = new Date(regDate);
  const today = new Date();
  return (
    today.getFullYear() === registrationDate.getFullYear() &&
    today.getMonth() === registrationDate.getMonth() &&
    today.getDate() === registrationDate.getDate()
  );
};

const StatsBar: FC<Props> = ({ participants }) => {
  return (
    <div className={css.statsWrapper}>
      <ul className={css.statsList}>
        {participants.length !== 0 ? (
          participants.map(({ _id, createdAt }) => (
            <li
              key={_id}
              className={clsx(css.statsElement, {
                [css.today]: registeredToday(createdAt),
              })}></li>
          ))
        ) : (
          <li style={{ width: '100%' }}>
            <p
              style={{ textAlign: 'center', color: 'lightgray', fontSize: 12 }}>
              No registrations yet
            </p>
          </li>
        )}
      </ul>
      {participants.length !== 0 && (
        <div className={css.regInfo}>
          <p className={css.totalReg}>Total: {participants.length}</p>
          <p className={css.todayReg}>
            Today:{' '}
            {
              participants.filter((participant) =>
                registeredToday(participant.createdAt)
              ).length
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default StatsBar;
