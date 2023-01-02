import create from "zustand";

type PaginationTypes = {
  postsPerPage: number;

  setDataPerPage: (value: number) => void;
};

const usePaginationGlobal = create<PaginationTypes>()((set) => ({
  postsPerPage: 10,

  setDataPerPage: (value) => set({ postsPerPage: value }),
}));

export default usePaginationGlobal;
