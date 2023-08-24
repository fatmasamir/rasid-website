export default {
  setLanguage(state, payload) {
    localStorage.setItem("lang", payload);
    state.language = payload;
  },
  changeLayout(state) {
    state.language = localStorage.getItem("lang");
    const language = localStorage.getItem("lang");
    console.log("language = ",language);
    let body = document.getElementsByTagName("html")[0];
    document.dir = language === "ar" ? "rtl" : "ltr";
    language === "en"
      ? body.classList.add("anglish_version")
      : body.classList.remove("anglish_version");
  },
};
