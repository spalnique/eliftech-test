import mongoose from 'mongoose';
import env from '../utils/env.ts';

import { DICT } from '../../../shared/types/index.ts';

const connectToDB = async () => {
  const DB_USER = env(DICT.DB_USER);
  const DB_PWD = env(DICT.DB_PWD);
  const DB_URL = env(DICT.DB_URL);
  const DB_NAME = env(DICT.DB_NAME);

  const connection_uri = `mongodb+srv://${DB_USER}:${DB_PWD}@${DB_URL}/${DB_NAME}`;

  try {
    if (mongoose.connection.readyState) return;
    await mongoose.connect(connection_uri);
    console.log('Connected to the database');
  } catch (e) {
    console.error(e);
  } finally {
    return mongoose.connection.readyState;
  }
};

export default connectToDB;
