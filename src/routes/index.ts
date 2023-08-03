import { Router } from 'express';

import { ingestData } from '../controllers/ingest-data.controller';

const router: Router = Router();

router.post('/ingest-data', ingestData);

export default router;
