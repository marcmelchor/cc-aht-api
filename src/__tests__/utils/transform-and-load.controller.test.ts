import SpyInstance = jest.SpyInstance;

import { environment } from '../../environments/environment';
import { transformAndLoad } from '../../controllers/transform-and-load.controller';


describe('transformAndLoadConsumer', (): void => {
  it('should return a Promise', (): void => {
    const result: Promise<Response> = transformAndLoad('token');
    expect(result).toBeInstanceOf(Promise);
  });

  it('should send a POST request to the correct URL', (): void => {
    const spy: SpyInstance = jest.spyOn(global, 'fetch');
    transformAndLoad('token');
    expect(spy)
      .toHaveBeenCalledWith(`${environment.transportAndLoadService}transform-and-load`, expect.any(Object));
    spy.mockRestore();
  });

  it('should send a JSON payload in the request body', () => {
    const spy: SpyInstance = jest.spyOn(global, 'fetch');
    transformAndLoad('token');
    expect(spy).toHaveBeenCalledWith(expect.any(String), {
      body: JSON.stringify({}),
      headers: expect.any(Object),
      method: 'POST',
    });
    spy.mockRestore();
  });

  it('should send the correct headers in the request', (): void => {
    const spy: SpyInstance = jest.spyOn(global, 'fetch');
    transformAndLoad('token');
    expect(spy).toHaveBeenCalledWith(expect.any(String), {
      body: JSON.stringify({}),
      headers: {
        authorization: 'Bearer token',
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      method: 'POST',
    });
    spy.mockRestore();
  });

  it('should handle network errors appropriately', async () => {
    const spy: SpyInstance = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject(new Error('Network error')));
    await expect(transformAndLoad('token')).rejects.toThrow('Network error');
    spy.mockRestore();
  });
});
