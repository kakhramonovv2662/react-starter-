import BaseService from "@/services/BaseService";
import { AxiosRequestConfig } from "axios";

export class Services {
  baseService = BaseService;

  public fetch(
    endpoint: string,
    options?: Omit<AxiosRequestConfig, "url" | "method">
  ) {
    return this.baseService({
      ...options,
      url: endpoint,
      method: "GET",
    });
  }

  public create(
    endpoint: string,
    data: AxiosRequestConfig["data"],
    options?: Omit<AxiosRequestConfig, "url" | "method" | "data">
  ) {
    return this.baseService({
      ...options,
      url: endpoint,
      method: "POST",
      data,
    });
  }

  public update(
    endpoint: string,
    data: AxiosRequestConfig["data"],
    options?: Omit<AxiosRequestConfig, "url" | "method" | "data">
  ) {
    return this.baseService({
      ...options,
      url: endpoint,
      method: "PUT",
      data,
    });
  }

  public delete(
    endpoint: string,
    options?: Omit<AxiosRequestConfig, "url" | "method">
  ) {
    return this.baseService({
      ...options,
      url: endpoint,
      method: "DELETE",
    });
  }
}
