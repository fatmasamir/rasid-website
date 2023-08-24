<template>
  <router-view> </router-view>
  <the-footer></the-footer>
</template>

<script>
import { useI18n } from "vue-i18n";
import TheFooter from "./components/layout/footer/TheFooter.vue";
export default {
  name: "App",
  components: {
    TheFooter,
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>

<style lang="scss">
@import "./assets/style/sass/query.scss";
@font-face {
  font-family: "Bahij-regular";
  src: url("./assets/fonts/Bahij_TheSansArabic-Light.ttf") format("truetype");
}

@font-face {
  font-family: "Bahij-Bold";
  src: url("./assets/fonts/Bahij_TheSansArabic-Bold.ttf") format("truetype");
}
html,
body {
  height: 100%;
  margin: 0px;
  padding: 0px;
  width: 100%;
}
html {
  width: 100% !important;
}
body {
  font-family: "Bahij-regular" !important;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  .input-error-message {
    color: #f56c6c;
    font-size: 12px;
  }
}
.route-enter-from,
.route-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
#app {
  display: flex;
  flex-direction: column;
  flex: 1;
}
ul {
  list-style: none;
}
h3 {
  font-size: 35.7505px !important;
  line-height: 52px !important;
  margin: 0;
  font-family: "Bahij-Bold";
}
p {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 33px;
}
.content {
  h3 {
    color: #1f0314;
    font-style: normal !important;
    font-weight: bold !important;
    font-size: 36px !important;
    line-height: 52px !important;
    margin-bottom: 16.09px !important;
  }
  p {
    color: #6f6f6f;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 33px;
    margin-bottom: 53.88px !important;
  }
  .actions {
    width: 255px;
    a {
      &:last-of-type {
        display: block;
        color: #d11388;
        text-decoration: none;
        text-align: center;
        margin-top: 18.18px;
        font-family: "Bahij-Bold";
        font-size: 19px;
      }
    }
  }
}
.anglish_version body {
}
</style>
