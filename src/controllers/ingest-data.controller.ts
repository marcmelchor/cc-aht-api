import { Request, Response } from 'express';

import { environment } from '../environments/environment';
import { transformAndLoad } from '../services/transform-and-load.service';


export const ingestData = async (req: Request, res: Response): Promise<Response> => {
  try {
    await transformAndLoad(environment.transportAndLoadToken, req.body);
    return res.send({message: 'Correctly consumed extract.'}).end();
  } catch (err: any) {
    return res.status(400).send({message: `Internal server error extracting: ${err.message}`}).end();
  }
}
