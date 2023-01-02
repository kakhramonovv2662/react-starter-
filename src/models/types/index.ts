import { IFetch, ModalType, useAllStoreType } from "@/types";
import { FormikValues } from "formik";

export interface IShape_value {
  type: "string" | "number" | "boolean";
  min?: {
    message: string;
    number: number;
  };
  max?: {
    message: string;
    number: number;
  };
  email?: string;
  matches?: {
    message: string;
    exp: RegExp;
  };
  required?: string;
}

export type shapeType = {
  shape_keys: string[];
  shape_values: IShape_value[];
};

export type StoreType = {
  // =========== default ===========
  data: IFetch<any>;
  setData: (value: IFetch<any>) => void;

  loading: boolean;
  setLoading: (value: boolean) => void;

  refresh: boolean;
  setRefresh: () => void;

  statusError: any;
  setStatusError: (value: any) => void;

  drawer: ModalType;
  setDrawer: (value: ModalType) => void;

  modal: ModalType;
  setModal: (value: ModalType) => void;
};

export type FeaturesStoreType = {
  // =========== custom ===========
  subFeature: IElement & { defaultId?: string | number };
  setSubFeature: (value: IElement & { defaultId?: string | number }) => void;
} & StoreType;

export interface IElement {
  isOpen: boolean;
  default?: DataValueTypes;
}

export type DataValueTypes = any;

export type storeSetType = (
  partial:
    | StoreType
    | Partial<StoreType>
    | ((state: StoreType) => StoreType | Partial<StoreType>),
  replace?: boolean | undefined
) => void;

export type getParamsType = { [k: string]: string };

export type getDataType = {
  params?: getParamsType;
  moduleType: useAllStoreType;
  stateName: string;
  path?: string;
};

export type requestData = {
  data: any;
  params?: getParamsType;
  moduleType: useAllStoreType;
  stateName: string;
  path?: string;
};

export type formType = {
  values: FormikValues;
  moduleType: useAllStoreType;
  path?: string;
};

export type requestDeleteData = {
  id?: string | number;
  params?: getParamsType;
  moduleType: useAllStoreType;
  path?: string;
};

export type drawerAction<T> = {
  action: boolean;
  moduleType: useAllStoreType;
  type: string;
  stateName: string;
  info?: T;
  builder?: string | null | ModalType;
};

export interface IActions {
  [k: string]: { stateName: string; type: string };
}
