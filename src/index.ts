import { environment } from './environments/environment';
import express from 'express';

import createServer from './utils/server';

const app: express.Application = createServer();

const PORT: number = environment.port;

// app.use(routes);
app.listen(PORT, (): void => {
  console.log(`Server running on port ${PORT}`);
});
