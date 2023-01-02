import create from "zustand";

type LoadingDataType = {
  loading: boolean;
  setLoading: (value: boolean) => void;
};

const useLoading = create<LoadingDataType>()((set) => ({
  loading: false,

  setLoading: (value) => set({ loading: value }),
  currency: {},
}));

export { useLoading };
