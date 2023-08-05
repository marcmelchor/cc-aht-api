import { Request, Response } from 'express';

export const ingestData = async (req: Request, res: Response): Promise<Response> => {
  console.log('Hit endpoint!', req.body);
  try {
    // TODO: Send message to the queue. Here the Message Broker produce (send) the message
    return res.status(200).json({message: 'Ingest Data Endpoint'}).end();
  } catch (error: any) {
    // TODO: Standardize error messages
    console.error(error);
    return res.status(500).json({message: `Error ingesting data: ${error.message}`}).end();
  }
}
