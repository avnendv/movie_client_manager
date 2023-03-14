import { Module } from "vuex";
import { RootState } from "../../types";
import { CategoryState } from "./types";
import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
} as Module<CategoryState, RootState>;
