import axios from 'axios';

import { environment } from '../../environments/environment';
import { transformAndLoad } from '../../services/transform-and-load.service';


describe('transformAndLoadConsumer', (): void => {
  it('should send a POST request with the correct body and headers', async () => {
    const authToken: string = 'testAuthToken';
    const body = {
      id: 1,
      uid: 'testUid',
      type: 'testType',
      rh_factor: 'testRhFactor',
      group: 'testGroup',
      username: 'testUsername'
    };
    const expectedUrl: string = `${environment.transportAndLoadService}transform-and-load`;
    const expectedHeaders = {
      authorization: `Bearer ${authToken}`,
      'content-type': 'application/json',
      'accept': 'application/json'
    };
    const axiosPostSpy: jest.SpyInstance = jest.spyOn(axios, 'post');
    axiosPostSpy.mockResolvedValueOnce({ data: {}, status: 200, statusText: 'OK', headers: {}, config: {} });
    await transformAndLoad(authToken, body);
    expect(axiosPostSpy).toHaveBeenCalledWith(expectedUrl, body, { headers: expectedHeaders });
  });

  it('should throw an error if the POST request fails', async () => {
    const authToken: string = 'testAuthToken';
    const body = {
      id: 1,
      uid: 'testUid',
      type: 'testType',
      rh_factor: 'testRhFactor',
      group: 'testGroup',
      username: 'testUsername'
    };
    const axiosPostSpy: jest.SpyInstance = jest.spyOn(axios, 'post');
    axiosPostSpy.mockRejectedValueOnce(new Error('Test error'));
    await expect(transformAndLoad(authToken, body)).rejects.toThrow('Test error');
  });

  it('should throw an error if authToken is not provided', async () => {
    const body = {
      id: 1,
      uid: 'testUid',
      type: 'testType',
      rh_factor: 'testRhFactor',
      group: 'testGroup',
      username: 'testUsername'
    };
    await expect(transformAndLoad(undefined, body)).rejects.toThrow('Request failed with status code 403');
  });
});
