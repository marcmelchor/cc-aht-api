import { ingestData } from '../../controllers/ingest-data.controller';


describe('ingestData', (): void => {
  it(
    'should return a 200 status code with a JSON message when a valid request is made',
    async (): Promise<void> => {
      const req: any = { body: {} };
      const res: any = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
        end: jest.fn()
      };
      await ingestData(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Ingest Data Endpoint' });
      expect(res.end).toHaveBeenCalled();
    }
  );

  it('should log \'Hit endpoint!\' and the request body when called', async (): Promise<void> => {
    const req: any = { body: { test: 'data' } };
    const res: any = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      end: jest.fn()
    };
    const consoleSpy: jest.SpyInstance = jest.spyOn(console, 'log');
    await ingestData(req, res);
    expect(consoleSpy).toHaveBeenCalledWith('Hit endpoint!', { test: 'data' });
    consoleSpy.mockRestore();
  });
});
