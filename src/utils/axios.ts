import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create();

service.interceptors.request.use((config: AxiosRequestConfig) => {
  // todo 请求拦截
  return config;
  },
  (error: any) => {
    Promise.reject(error)
  }
);
service.interceptors.response.use(async (resopnse: AxiosResponse) => {
  // todo 响应拦截
},
(error: any) => {
  return Promise.reject(error)
}
);

export default service;