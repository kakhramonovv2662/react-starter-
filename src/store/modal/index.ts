import { Delete, DeleteDialog } from "@/types";
import create from "zustand";

const useDialog = create<DeleteDialog>()((set) => ({
  deleteInfo: {
    isOpen: false,
  },
  setDeleteInfo: (deleteInfo: Delete) => set(() => ({ deleteInfo })),
}));

export default useDialog;
