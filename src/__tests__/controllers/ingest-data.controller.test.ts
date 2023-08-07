import { Request, Response } from 'express';
import { AxiosResponse } from 'axios';

import { ingestData } from '../../controllers/ingest-data.controller';
import * as services from '../../services/transform-and-load.service';


describe('ingestData', (): void => {
  it('should return a 200 status code and OK message when transformAndLoad returns a 200 status code', async () => {
    const req: Request = { body: {} } as Request;
    const res: Response =
      { status: jest.fn().mockReturnThis(), send: jest.fn().mockReturnThis(), end: jest.fn() } as unknown as Response;
    const mockAxiosResponse: AxiosResponse = { status: 200 } as AxiosResponse;
    jest.spyOn(services, 'transformAndLoad').mockResolvedValue(mockAxiosResponse);
    await ingestData(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({ message: 'OK' });
    expect(res.end).toHaveBeenCalled();
  });

  it('should return a 400 status code and NOT OK message when transformAndLoad returns a non-200 status code', async () => {
    const req: Request = { body: {} } as Request;
    const res: Response =
      { status: jest.fn().mockReturnThis(), send: jest.fn().mockReturnThis(), end: jest.fn() } as unknown as Response;
    const mockAxiosResponse: AxiosResponse = { status: 400 } as AxiosResponse;
    jest.spyOn(services, 'transformAndLoad').mockResolvedValue(mockAxiosResponse);
    await ingestData(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({ message: 'NOT OK' });
    expect(res.end).toHaveBeenCalled();
  });
});
