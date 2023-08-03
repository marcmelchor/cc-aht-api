import express, { Application } from 'express';

import { environment } from './environments/environment';
import routes from './routes';

const app: Application = express();

// Middlewares
// app.use(express.json);
app.use(express.urlencoded({extended: false}));

const PORT: number = environment.port;

app.use(routes);
app.listen(PORT, (): void => {
  console.log(`Server running on port ${PORT}`);
});
