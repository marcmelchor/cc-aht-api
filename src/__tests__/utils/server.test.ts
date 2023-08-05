import express, { Application } from 'express';

import createServer from '../../utils/server';
import routes from '../../routes';


const app: Application = createServer();

describe('createServer', (): void => {
  it('should use express.json() middleware', (): void => {
    const spy: jest.SpyInstance = jest.spyOn(express, 'json');
    app.use(express.json());
    expect(spy).toHaveBeenCalled();
  });

  it('should use express.urlencoded() middleware', (): void => {
    const spy: jest.SpyInstance = jest.spyOn(express, 'urlencoded');
    app.use(express.urlencoded({extended: false}));
    expect(spy).toHaveBeenCalled();
  });

  it('should add routes to the application', (): void => {
    const spy: jest.SpyInstance = jest.spyOn(app, 'use');
    app.use(routes);
    expect(spy).toHaveBeenCalledWith(routes);
  });

  it('should handle errors while adding routes to the application', (): void => {
    const error: Error = new Error('Error adding routes');
    jest.spyOn(app, 'use').mockImplementation((): Application => {
      throw error;
    });
    expect((): void => {
      app.use(routes);
    }).toThrow(error);
  });
});
