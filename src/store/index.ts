import { createStore, createLogger } from "vuex";
import category from "./modules/category";
import { RootState } from "./types";

const debug = process.env.NODE_ENV !== "production";

export default createStore<RootState>({
  state: {
    version: import.meta.env.APP_VERSION || "1.0.0",
  },
  modules: {
    category,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
