export interface IParticipantDocument {
  _id?: string;
  fullName: string;
  email: string;
  dob: string;
  source: string;
}

export interface IEventDocument {
  _id?: string;
  title: string;
  desc: string;
  date: string;
  organizer: string;
  participants: [IParticipantDocument];
}

export interface IPagination {
  totalEvents: number;
  page: number;
  perPage: number;
  totalPages: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

export interface IResponse {
  status: number;
  message: string;
  data: IEventDocument[];
  pagination: IPagination;
}
