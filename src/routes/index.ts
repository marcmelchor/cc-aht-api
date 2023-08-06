import { Router } from 'express';

import { ingestData } from '../controllers/ingest-data.controller';
import { isAuthorized } from '../utils/middlewares';

const router: Router = Router();

router.post('/ingest-data', isAuthorized, ingestData);

export default router;
