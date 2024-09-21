import EventModel from '../db/models/event.ts';
import { calculatePaginationData } from '../utils/calculatePaginationData.ts';

export const getEvents = async (page: number = 1, limit: number = 12) => {
  const skip = (page - 1) * limit;

  const [totalEvents, events] = await Promise.all([
    EventModel.find().countDocuments(),
    EventModel.find().skip(skip).limit(limit).exec(),
  ]);

  const pagination = calculatePaginationData(totalEvents, page, limit);

  return { data: events, ...pagination };
};

export const getEventById = async (id: string) => {
  return await EventModel.findById(id);
};
