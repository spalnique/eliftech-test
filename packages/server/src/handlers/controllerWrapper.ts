import type { RequestHandler } from 'express';

const controllerWrapper = (controller: RequestHandler): RequestHandler => {
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

export default controllerWrapper;
