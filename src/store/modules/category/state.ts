import { Category } from "../../../models";
import { CategoryState } from "./types";

const state: CategoryState = {
  list: [],
  item: {} as Category,
  isPending: false,
  isPendingShow: false,
};

export default state;
