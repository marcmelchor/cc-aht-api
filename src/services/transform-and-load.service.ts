import axios, { AxiosResponse } from 'axios';

import { environment } from '../environments/environment';
import { Producer } from '../models/producer.model';


export async function transformAndLoad(authToken: string | undefined, body: Producer): Promise<AxiosResponse> {
  try {
    return await axios.post(
      `${environment.transportAndLoadService}transform-and-load`,
      body, {
        headers: {
          authorization: `Bearer ${authToken}`,
          'content-type': 'application/json',
          'accept': 'application/json'
        }
      });
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}
