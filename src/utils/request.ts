import axios from 'axios';
import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

const request: AxiosInstance = axios.create({});

// request interceptor
request.interceptors.request.use(
  (config): InternalAxiosRequestConfig => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor
request.interceptors.response.use(
  (response) => {
    // 只要状态码是这些之一就认为是成功的响应
    if (
      response.status === 200 ||
      response.status === 201 ||
      response.status === 304
    ) {
      const data: any = response.data;

      if (data) {
        return data;
      } else {
        return Promise.reject(data);
      }
    } else {
      return Promise.reject(response);
    }
  },
  async (error) => {
    return Promise.reject(error);
  }
);
export default request;
