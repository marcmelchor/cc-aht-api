import { environment } from '../environments/environment';


export async function transformAndLoad(authToken: string): Promise<Response> {
  // TODO: Add the body to be consumed by the transformer
  return await fetch(
    `${environment.transportAndLoadService}transform-and-load`, {
      body: JSON.stringify({}),
      headers: {
        authorization: `Bearer ${authToken}`,
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      method: 'POST',
    }
  );
}
