import { Category } from "@/models";

export interface CategoryState {
  list: Category[];
  item: Category;
  isPending: boolean;
  isPendingShow: boolean;
  isPendingStore: boolean;
  isPendingUpdate: boolean;
  isPendingDestroy: boolean;
  isPendingRestore: boolean;
}
