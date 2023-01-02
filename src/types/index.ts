import { FormikValues } from "formik";

export type ThemeDirectionType = "rtl" | "ltr";
export type ThemeModeType = "dark" | "light";

export type Delete = {
  isOpen: boolean;
  info?: {
    title: string;
    text: string;
  };
  fn?: () => void;
};
export type DeleteDialog = {
  deleteInfo: Delete;
  setDeleteInfo: (state: Delete) => void;
};
export type DrawerFooterType = {
  onSaveClick: () => void;
  onCancel: () => void;
  action?: "add" | "save" | "filter";
  onClear?: () => void;
  loading?: boolean;
};

export type IField = {
  name: string;
  onBlur: () => void;
  onChange: () => void;
  value?: string;
};

export interface IFetch<T> {
  data: T[] | null;
  page_size: number;
  total_elements: number;
  total_pages: number;
}

export type RenderStarsOption = {
  activeCount: number;
  starCount: number;
};

export type ActionType = {
  id: string | number;
  short_name?: string;
  keyType?: any;
  row?: any;
};

// =============== New ==================

export type useAllStoreType =
  | "dashboard"
  | "stores"
  | "users"
  | "tariffs"
  | "features"
  | "storeCategory"
  | "country"
  | "store"
  | "currency";

export type ModalType = {
  isOpen: boolean;
  type: string;
  info?: any;
  builder?: string | null | ModalType;
};

export type FormComponentType = {
  onSubmit?: (value: FormikValues) => void;
  initialValues?: any;
};

export type ITableCol<T> = {
  row: T;
};

export type IPropTableCol<T> = {
  row: {
    original: T;
    index: number;
  };
};
