import { createStore } from "vuex";
import localsModules from "./modules/locals/index";
const store = createStore({
  modules: {
    locales: localsModules,
  },
  mutations: {},
  actions: {},
});

export default store;
