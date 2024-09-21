export interface IParticipantDocument {
  fullName: string;
  email: string;
  dob: string;
  source: string;
}

export interface IEventDocument {
  title: string;
  desc: string;
  date: string;
  organizer: string;
  participants: [IParticipantDocument];
}
