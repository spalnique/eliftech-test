import express from 'express';

import controllerWrapper from '../handlers/controllerWrapper.ts';
import {
  addParticipantController,
  getEventByIdController,
  getEventsController,
} from '../controllers/events.ts';

const eventsRouter = express.Router();

eventsRouter.get('/', controllerWrapper(getEventsController));
eventsRouter.get('/:id', controllerWrapper(getEventByIdController));
eventsRouter.post(
  '/participant/add',
  controllerWrapper(addParticipantController)
);

export default eventsRouter;
