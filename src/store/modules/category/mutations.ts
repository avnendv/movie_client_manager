import { MutationTree } from "vuex";
import { Category } from "../../../models";
import { CategoryState } from "./types";

const mutations: MutationTree<CategoryState> = {
  SET_IS_PENDING_LIST(state, payload: boolean) {
    state.isPending = payload;
  },

  SET_IS_PENDING_SHOW(state, payload: boolean) {
    state.isPendingShow = payload;
  },

  SET_DATA_LIST(state, payload: Category[]) {
    state.list = payload;
  },

  SET_DATA_ITEM(state, payload: Category) {
    state.item = payload;
  },
};

export default mutations;
