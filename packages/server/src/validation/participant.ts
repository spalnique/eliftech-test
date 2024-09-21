import joi from 'joi';

import type { IParticipantDocument } from '@shared/types';

const participantSchema = joi.object<any, false, Partial<IParticipantDocument>>(
  {
    fullName: joi.string().min(3).max(32).required(),
    email: joi.string().email().required(),
    dob: joi.date().required(),
    source: joi
      .string()
      .valid(['Social media', 'Friends', 'Found myself'])
      .required(),
  }
);

export default participantSchema;
