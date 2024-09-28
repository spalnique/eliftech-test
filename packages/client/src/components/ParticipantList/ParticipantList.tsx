import ParticipantItem from '../ParticipantItem/ParticipantItem.tsx';

import type { FC } from 'react';
import type { IParticipantDocument } from '../../../../shared/types/index.ts';

import css from './ParticipantList.module.css';

type Props = {
  participants: IParticipantDocument[];
};

const ParticipantList: FC<Props> = ({ participants }) => {
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
