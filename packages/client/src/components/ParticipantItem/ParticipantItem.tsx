import type { FC } from 'react';
import type { IParticipantDocument } from '../../../../shared/types/index.ts';

import css from './ParticipantItem.module.css';

type Props = {
  participant: IParticipantDocument;
};

const ParticipantItem: FC<Props> = ({ participant }) => {
  return (
    <li className={css.item}>
      <p className={css.name}>{participant.fullName}</p>
      <p className={css.email}>{participant.email}</p>
    </li>
  );
};

export default ParticipantItem;
