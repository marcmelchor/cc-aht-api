import express, { Express } from 'express';

import { environment } from './environments/environment';

const app: Express = express();
app.use(express.json);

const PORT: number = environment.port;

app.listen(PORT, (): void => {
  console.log(`Server running on port ${PORT}`);
});
