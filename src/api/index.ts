import axios, {
  AxiosResponse,
  Method,
} from 'axios';

import { type QuicksellApi } from '../types';

console.log(import.meta.env.VITE_QUICKSELL_API_URL)

const api = axios.create({
  baseURL:
    import.meta.env.VITE_QUICKSELL_API_URL ?? '',
});

const request = (
  method: Method,
  params: any
): Promise<AxiosResponse<QuicksellApi>> => {
  return api.request({
    method,
    params,
  });
};

export default request;
