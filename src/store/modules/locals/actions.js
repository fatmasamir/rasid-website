export default {
  setLanguage(context, payload) {
    context.commit("setLanguage", payload);
  },
  changeLayout(context) {
    context.commit("changeLayout");
  },
};
