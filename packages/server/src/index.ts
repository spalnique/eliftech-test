import app from './app.ts';
import connectToDB from './db/connectToDB.ts';
import env from './utils/env.ts';

import { DICT } from '../../shared/types/index.ts';
import pingSelf from './utils/pingSelf.ts';

(async () => {
  const connectionState = await connectToDB();

  const PORT = env(DICT.PORT) || 3000;
  const API_URL = env(DICT.API_URL);

  if (connectionState === 1) {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
      console.log(`Check status at: ${API_URL}/status`);
    });

    setInterval(pingSelf, 600000);
  }
})();
