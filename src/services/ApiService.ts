import { AxiosRequestConfig } from "axios";
import BaseService from "./BaseService";

// eslint-disable-next-line @typescript-eslint/ban-types
export type iApiService = {};

const ApiService = {
  fetch(
    endpoint: string,
    options?: Omit<AxiosRequestConfig, "url" | "method">
  ) {
    return BaseService({
      ...options,
      url: endpoint,
      method: "GET",
    });
  },
  create(
    endpoint: string,
    data: AxiosRequestConfig["data"],
    options?: Omit<AxiosRequestConfig, "url" | "method" | "data">
  ) {
    return BaseService({
      ...options,
      url: endpoint,
      method: "POST",
      data,
    });
  },
  update(
    endpoint: string,
    data: AxiosRequestConfig["data"],
    options?: Omit<AxiosRequestConfig, "url" | "method" | "data">
  ) {
    return BaseService({
      ...options,
      url: endpoint,
      method: "PUT",
      data,
    });
  },
  delete(
    endpoint: string,
    options?: Omit<AxiosRequestConfig, "url" | "method">
  ) {
    return BaseService({
      ...options,
      url: endpoint,
      method: "DELETE",
    });
  },
};

export default ApiService;
