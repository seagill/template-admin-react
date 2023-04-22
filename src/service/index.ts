import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getToken, removeToken } from '@/utils/token';
import { notification } from 'antd';
import router from '@/router';

export interface IResponse<T = any> {
  data: T;
  code: number;
  message: string;
}

export default class Service {
  private instance;
  constructor() {
    this.instance = this._init();
  }

  private _init() {
    const _instance = axios.create({});

    _instance.interceptors.request.use(
      (config) => {
        config.headers.Authorization = getToken();
        return config;
      },
      (error) => Promise.reject(error),
    );

    _instance.interceptors.response.use(
      (reponse) => {
        const data = reponse.data;
        if (data.code === 1000) {
          return reponse.data;
        } else {
          if (data.code === 8866) {
            removeToken();
            router.navigate('/login');
          } else {
            notification.error({ message: '请求提示', description: data.message });
          }

          return Promise.reject(data);
        }
      },
      (error) => Promise.reject(error),
    );

    return _instance;
  }

  request<I>(optionos: AxiosRequestConfig) {
    return this.instance.request<any, IResponse<I>>(optionos);
  }
}
