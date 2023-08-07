import { Request, Response } from 'express';
import { AxiosResponse } from 'axios';

import { environment } from '../environments/environment';
import { transformAndLoad } from '../services/transform-and-load.service';


export const ingestData = async (req: Request, res: Response): Promise<Response> => {
  const response: AxiosResponse = await transformAndLoad(environment.transportAndLoadToken, req.body);
  // TODO: The body is not really necessary, it was implemented in order to test the integration between micro-services
  if (response.status === 200) {
    return res.status(200).send({message: 'OK'}).end();
  } else {
    return res.status(400).send({message: 'NOT OK'}).end();
  }
}
