import { Request, Response } from 'express';

import { environment } from '../../environments/environment';
import { isAuthorized } from '../../utils/middlewares';


const req: Request = { headers: { authorization: `Bearer ${environment.authSourceToken}` } } as unknown as Request;
const reqBadToken: Request = { headers: { authorization: 'Bearer invalidToken' } } as Request;
const res: Response = { status: jest.fn().mockReturnThis(), json: jest.fn() } as unknown as Response;
const next: jest.Mock = jest.fn();

describe('isAuthorized', (): void => {
  it('should call next() when a valid authorization header token is provided', async (): Promise<void> => {
    await isAuthorized(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  it('should return a response with status code 403 and a message when an invalid authorization header token is provided', async (): Promise<void> => {
    await isAuthorized(reqBadToken, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ message: 'Unauthorized to ingest.' });
  });

  it('should return a response with status code 400 and an error message when an unexpected error occurs', async (): Promise<void> => {
    const req: Request = {} as Request;
    const next: jest.Mock = jest.fn().mockRejectedValue(new Error('Unexpected error.'));

    await isAuthorized(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: 'Cannot read properties of undefined (reading \'authorization\')' });
  });
});
