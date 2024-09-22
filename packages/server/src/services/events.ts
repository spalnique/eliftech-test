import EventModel from '../db/models/event.ts';
import { calculatePaginationData } from '../utils/calculatePaginationData.ts';

export const getEvents = async (page: number = 1, perPage: number = 12) => {
  const skip = (page - 1) * perPage;

  const [totalEvents, events] = await Promise.all([
    EventModel.countDocuments(),
    EventModel.find().skip(skip).limit(perPage).exec(),
  ]);

  const pagination = calculatePaginationData(totalEvents, page, perPage);

  return { data: events, ...pagination };
};

export const getEventById = async (id: string) => {
  return await EventModel.findById(id);
};
