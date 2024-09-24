import type { RequestHandler } from 'express';

import { addParticipant, getEventById, getEvents } from '../services/events.ts';
import parsePaginationParams from '../utils/parsePaginationParams.ts';
import type {
  IEventDocument,
  IParticipantDocument,
} from '../../../shared/types/index.ts';
import { parseSortParams } from '../utils/parseSortParams.ts';

export const getEventsController: RequestHandler = async (req, res, _next) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);

  const { events, ...pagination } = await getEvents({
    page,
    perPage,
    sortBy,
    sortOrder,
  });

  res.status(200).json({ events, pagination });
};

export const getEventByIdController: RequestHandler = async (
  req,
  res,
  _next
) => {
  const data = await getEventById(req.params.id);

  res.status(200).json({ status: 200, message: 'Success', data });
};

export const addParticipantController: RequestHandler = async (
  req,
  res,
  _next
) => {
  const { id } = req.query;
  const { participant } = req.body;
  const newParticipant: IEventDocument | null = await addParticipant(
    id as string,
    participant as IParticipantDocument
  );
  res.status(201).json({
    status: 201,
    message: 'Successfully added new participant.',
    data: newParticipant,
  });
};
