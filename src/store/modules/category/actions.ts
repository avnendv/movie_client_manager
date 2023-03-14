import { ActionTree } from "vuex";
import { RootState } from "../../types";
import { CategoryState } from "./types";
import CategoryApi from "../../../api/Category";
import { ListParams } from "../../../models";

const actions: ActionTree<CategoryState, RootState> = {
  list({ commit }, params: ListParams) {
    commit("SET_IS_PENDING_LIST", true);
    CategoryApi.list(params)
      .then((response) => {
        commit("SET_DATA_LIST", response.data);
      })
      .catch(() => {
        throw new Error("Could not get list category!");
      })
      .finally(() => commit("SET_IS_PENDING_LIST", false));
  },
  show({ commit }, id: number) {
    commit("SET_IS_PENDING_SHOW", true);
    CategoryApi.show(id)
      .then((response) => {
        commit("SET_DATA_ITEM", response.data);
      })
      .catch(() => {
        throw new Error(`Could not get data category with id: ${id}!`);
      })
      .finally(() => commit("SET_IS_PENDING_SHOW", false));
  },
};

export default actions;
