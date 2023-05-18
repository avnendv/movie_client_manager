import { ActionTree } from "vuex";
import { RootState } from "@/store/types";
import { CategoryState } from "./types";
import CategoryApi from "@/api/Category";
import { Category, ListParams } from "@/models";

const actions: ActionTree<CategoryState, RootState> = {
  list({ commit }, params: ListParams) {
    commit("SET_IS_PENDING_LIST", true);
    return CategoryApi.list(params)
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
    return CategoryApi.show(id)
      .then((response) => {
        commit("SET_DATA_ITEM", response.data);
      })
      .catch(() => {
        throw new Error(`Could not get data category with id: ${id}!`);
      })
      .finally(() => commit("SET_IS_PENDING_SHOW", false));
  },

  store({ commit }, data: Category) {
    commit("SET_IS_PENDING_STORE", true);
    return CategoryApi.store(data)
      .then((response) => {
        if (+response.result === 0) {
          throw new Error(response.msg);
        }
      })
      .catch(() => {
        throw new Error(`Could not store category!`);
      })
      .finally(() => commit("SET_IS_PENDING_STORE", false));
  },

  update({ commit }, { id, data }) {
    commit("SET_IS_PENDING_UPDATE", true);
    return CategoryApi.update(id, data)
      .then((response) => {
        if (+response.result === 0) {
          throw new Error(response.msg);
        }
      })
      .catch(() => {
        throw new Error(`Could not update category!`);
      })
      .finally(() => commit("SET_IS_PENDING_UPDATE", false));
  },

  destroy({ commit }, id: number) {
    commit("SET_IS_PENDING_DESTROY", true);
    return CategoryApi.destroy(id)
      .then((response) => {
        if (+response.result === 0) {
          throw new Error(response.msg);
        }
      })
      .catch(() => {
        throw new Error(`Could not delete category!`);
      })
      .finally(() => commit("SET_IS_PENDING_DESTROY", false));
  },

  restore({ commit }, id: number) {
    commit("SET_IS_PENDING_RESTORE", true);
    return CategoryApi.restore(id)
      .then((response) => {
        if (+response.result === 0) {
          throw new Error(response.msg);
        }
      })
      .catch(() => {
        throw new Error(`Could not restore category!`);
      })
      .finally(() => commit("SET_IS_PENDING_RESTORE", false));
  },
};

export default actions;
