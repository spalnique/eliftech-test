import express from 'express';

import controllerWrapper from '../handlers/controllerWrapper.ts';
import {
  getEventByIdController,
  getEventsController,
} from '../controllers/events.ts';

const eventsRouter = express.Router();

eventsRouter.get('/', controllerWrapper(getEventsController));
eventsRouter.get('/:id', controllerWrapper(getEventByIdController));

export default eventsRouter;
