import type { RequestHandler } from 'express';

const statusHandler: RequestHandler = (_req, res, _next) => {
  res.status(200).send(`Server is safe and sound`);
};

export default statusHandler;
