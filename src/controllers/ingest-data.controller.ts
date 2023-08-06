import { Request, Response } from 'express';
import { transformAndLoad } from './transform-and-load.controller';
import { environment } from '../environments/environment';


export const ingestData = async (_req: Request, res: Response): Promise<any> => {
  const response: globalThis.Response = await transformAndLoad(environment.transportAndLoadToken);
  const body = await response.json().then(body => body);
  // TODO: The body is not really necessary, it was implemented in order to test the integration between micro-services
  if (response.status === 200) {
    return res
      .status(200)
      .send({message: body})
      .end();
  } else {
    return res.status(400).json({message: 'response.message'}).end();
  }
}
