import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
export default {
  state() {
    return {
      language: "ar",
    };
  },
  mutations,
  actions,
  getters,
};
