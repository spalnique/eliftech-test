import type { IParticipantDocument } from '../../../shared/types/index.ts';
import EventModel from '../db/models/event.ts';
import { SORT_BY, SORT_ORDER } from '../types/dict.enum.ts';
import { calculatePaginationData } from '../utils/calculatePaginationData.ts';

export const getEvents = async ({
  page = 1,
  perPage = 12,
  sortBy = SORT_BY.DATE,
  sortOrder = SORT_ORDER.DESC,
}) => {
  const skip = (page - 1) * perPage;

  const [totalEvents, events] = await Promise.all([
    EventModel.countDocuments(),
    EventModel.find()
      .skip(skip)
      .limit(perPage)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);

  const pagination = calculatePaginationData(totalEvents, page, perPage);

  return { events, ...pagination };
};

export const getEventById = async (id: string) => {
  return await EventModel.findById(id);
};

export const addParticipant = async (
  id: string,
  participant: IParticipantDocument
) => {
  return await EventModel.findByIdAndUpdate(
    id,
    {
      $push: { participants: participant },
    },
    { new: true }
  );
};
