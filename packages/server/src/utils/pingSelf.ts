import { DICT } from '../../../shared/types/index.ts';
import env from './env.ts';

const API_URL = env(DICT.API_URL);

const pingSelf = async () => {
  try {
    await fetch(`${API_URL}/status`);
    console.log('Ping');
  } catch (error) {
    console.error(error);
  }
};

export default pingSelf;
