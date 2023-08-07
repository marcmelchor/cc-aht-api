import { Request, Response } from 'express';
// import { AxiosResponse } from 'axios';

import { ingestData } from '../../controllers/ingest-data.controller';
import * as services from '../../services/transform-and-load.service';


describe('ingestData', (): void => {
  it('should return a success message when data is ingested', async () => {
    const req: Request = { body: { data: 'test data' } } as Request;
    const res: Response = { send: jest.fn().mockReturnThis(), end: jest.fn().mockReturnThis() } as unknown as Response;
    const transformAndLoadMock: jest.SpyInstance = jest.spyOn(services, 'transformAndLoad');
    transformAndLoadMock.mockResolvedValueOnce({ data: { message: 'Transform and Sink Data' }, status: 200 });
    await ingestData(req, res);
    expect(res.send).toHaveBeenCalledWith({ message: 'Correctly consumed extract.' });
    expect(res.end).toHaveBeenCalled();
  });

  it('should return a 400 status code when transformAndLoad throws an error', async () => {
    const req: Request = { body: { data: 'test data' } } as Request;
    const res: Response = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
      end: jest.fn().mockReturnThis()
    } as unknown as Response;
    const errorMessage: string = 'Test error message';
    const transformAndLoadMock: jest.SpyInstance = jest.spyOn(services, 'transformAndLoad');
    transformAndLoadMock.mockRejectedValueOnce(new Error(errorMessage));
    await ingestData(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({ message: `Internal server error extracting: ${errorMessage}` });
    expect(res.end).toHaveBeenCalled();
  });

  it('should return a 400 status code when req.body is undefined', async () => {
    const req: Request = {} as Request;
    const res: Response = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
      end: jest.fn().mockReturnThis()
    } as unknown as Response;
    const transformAndLoadMock: jest.SpyInstance = jest.spyOn(services, 'transformAndLoad');
    transformAndLoadMock.mockRejectedValueOnce(new Error('Cannot destructure property `data` of `undefined` or `null`.'));
    await ingestData(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({ message: 'Internal server error extracting: Cannot destructure property `data` of `undefined` or `null`.' });
    expect(res.end).toHaveBeenCalled();
  });
});
