import app from './app.ts';
import connectToDB from './db/connectToDB.ts';
import env from './utils/env.ts';

import { ENV_VARS } from './types/ENV.enum.ts';

(async () => {
  const connection = await connectToDB();

  const PORT = env(ENV_VARS.PORT) || 3000;

  if (connection!.state === 1) {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
      console.log(`Check status at: http://localhost:${PORT}/status`);
    });
  }
})();
