import create from "zustand";

export const initialState = {
  currentRouteKey: "",
};

export const useCommon = create((set) => ({
  initialState,
  setCurrentRouteKey: (value: string | any) =>
    set(() => ({
      initialState: {
        currentRouteKey: value,
      },
    })),
}));

export default initialState;
