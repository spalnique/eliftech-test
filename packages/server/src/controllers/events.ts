import type { RequestHandler } from 'express';

import { getEventById, getEvents } from '../services/events.ts';
import parsePaginationParams from '../utils/parsePaginationParams.ts';

export const getEventsController: RequestHandler = async (req, res, _next) => {
  const reqPage = req.query.page;
  const reqPerPage = req.query.perPage;

  const { page, perPage } = parsePaginationParams(reqPage, reqPerPage);

  const { data, ...pagination } = await getEvents(page, perPage);

  res.status(200).json({ status: 200, message: 'Success', data, pagination });
};

export const getEventByIdController: RequestHandler = async (
  req,
  res,
  _next
) => {
  const data = await getEventById(req.params.id);

  res.status(200).json({ status: 200, message: 'Success', data });
};
