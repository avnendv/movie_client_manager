import { CategoryState } from "./modules/category/types";

export interface RootState {
  version: string;
  category?: CategoryState,
}
