import { Request, Response } from 'express';

export const ingestData = async (_req: Request, res: Response): Promise<Response>=> {
  console.log('Hit endpoint!');
  // TODO: Send message to the queue
  return res.status(200).json({message: 'Ingest Data Endpoint'});
}
