import createHttpError from 'http-errors';
import { ObjectSchema, ValidationError } from 'joi';

import type { RequestHandler } from 'express';

const validateBody =
  (schema: ObjectSchema): RequestHandler =>
  async (req, _res, next) => {
    try {
      await schema.validateAsync(req.body, {
        abortEarly: false,
      });
      next();
    } catch (err: any) {
      if (err instanceof ValidationError) {
        next(
          createHttpError(400, 'Bad Request', {
            errors: err.details,
          })
        );
      } else {
        next(err);
      }
    }
  };

export default validateBody;
