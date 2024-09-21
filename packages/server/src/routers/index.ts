import { Router } from 'express';

import eventsRouter from './events.ts';
import statusHandler from '../handlers/statusHandler.ts';
import notFoundHandler from '../handlers/notFoundHandler.ts';
import errorHandler from '../handlers/errorHandler.ts';

const router = Router();

router.use('/event', eventsRouter);
router.get('/status', statusHandler);

router.use('/*', notFoundHandler);
router.use(errorHandler);

export default router;
