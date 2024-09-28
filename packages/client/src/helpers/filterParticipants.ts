import type { IParticipantDocument } from '../../../shared/types/index.ts';

type FilterFn = (
  participants: IParticipantDocument[],
  filter: string
) => IParticipantDocument[];

const filterParticipants: FilterFn = (participants, filter) => {
  if (!filter) return participants;
  return participants.filter(
    ({ fullName, email }) => fullName.includes(filter) || email.includes(filter)
  );
};

export default filterParticipants;
