

export enum SORT_BY {
title = 'title';
date = 'date';
organizer = 'organizer'
}

export enum SORT_ORDER {
ASC = 'asc';
DESC = 'desc';
}

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

export interface IResponseData {
  status: number;
  message: string;
  data: IEventDocument[];
  pagination: IPagination;
}

export interface ISort {
  sortBy: SORT_BY;
  sortOrder: SORT_ORDER;
}

export interface IQuery {
  page?: string;
  perPage?: string;
  sortBy?: SORT_BY;
  sortOrder?: SORT_ORDER;
}
