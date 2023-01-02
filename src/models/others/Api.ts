import { useAllStoreType } from "@/types";

enum ApiEnums {
  dashboard = "/dashboard",
  stores = "/stores",
  users = "/users",
  tariffs = "/tariffs",
  features = "/features",
  storeCategory = "/store/categories",
  country = "/countries",
  currency = "/currencies",
  store = "/store",
}

export class Api {
  public generate(moduleType: useAllStoreType, path?: string) {
    const url = ApiEnums[moduleType];
    if (path) return url + path;
    else return url;
  }
}

export default new Api();
