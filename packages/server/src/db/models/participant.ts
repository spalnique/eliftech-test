import { Schema } from 'mongoose';

import type { IParticipantDocument } from '@shared/types';

const participantSchema = new Schema<IParticipantDocument>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    dob: { type: String, required: true },
    source: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
    id: true,
    virtuals: true,
  }
);

export default participantSchema;
