import express from 'express';
import cors from 'cors';

import router from './routers/index.ts';

const app = express();

app.set('trust proxy', 1);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

export default app;
