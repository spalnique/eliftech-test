import { model, Schema } from 'mongoose';

import type { IEventDocument } from '@shared/types';
import participantSchema from './participant.ts';

const eventSchema = new Schema<IEventDocument>(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    date: { type: String, required: true },
    organizer: { type: String, required: true },
    participants: { type: [participantSchema], default: [] },
  },
  {
    timestamps: true,
    versionKey: false,
    id: true,
    virtuals: true,
  }
);

const EventModel = model<IEventDocument>('event', eventSchema);

export default EventModel;
