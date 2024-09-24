import { DICT } from '../../../shared/types/index.ts';
import env from './env.ts';

const API_URL = env(DICT.API_URL);
const PORT = env(DICT.PORT);
const isLocalhost = API_URL?.includes('localhost') ?? false;

const pingSelf = async () => {
  try {
    await fetch(`${API_URL}${isLocalhost && ':' + PORT}/status`);
    console.log('Ping');
  } catch (error) {
    console.error(error);
  }
};

export default pingSelf;
