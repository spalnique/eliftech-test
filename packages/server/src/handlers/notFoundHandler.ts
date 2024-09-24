import type { RequestHandler } from 'express';

const notFoundHandler: RequestHandler = (_req, res, _next) => {
  res.status(404).json({
    message: 'Route not found',
  });
};

export default notFoundHandler;
