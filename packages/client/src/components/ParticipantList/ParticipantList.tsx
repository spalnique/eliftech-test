import ParticipantItem from '../ParticipantItem/ParticipantItem.tsx';

import type { FC, ReactNode } from 'react';
import type { IParticipantDocument } from '../../../../shared/types/index.ts';

import css from './ParticipantList.module.css';

type Props = {
  participants: IParticipantDocument[];
};

const ParticipantList: FC<Props> = ({ participants }): ReactNode => {
  return (
    <ul className={css.list}>
      {participants.map((participant) => {
        return (
          <ParticipantItem key={participant._id} participant={participant} />
        );
      })}
    </ul>
  );
};

export default ParticipantList;
