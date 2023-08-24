<template>
  <ul>
    <li>
      <router-link to="/">
        <span class="link-icon"
          ><img src="../../../assets/icons/home_black_24dp.png" /></span
        >{{ t("home") }}</router-link
      >
    </li>
    <div class="divider"></div>
    <li>
      <router-link to="/services"
        ><span class="link-icon"
          ><img src="../../../assets/icons/services.png" /></span
        >{{ t("services") }}</router-link
      >
    </li>
    <li>
      <router-link to="/about-us"
        ><span class="link-icon"
          ><img src="../../../assets/icons/customer-service.png" /></span
        >{{ t("aboutus") }}</router-link
      >
    </li>
    <li>
      <router-link to="/contact-us"
        ><span class="link-icon"
          ><img src="../../../assets/icons/info-information.png" /></span
        >{{ t("contactus") }}</router-link
      >
    </li>
    <div class="divider"></div>
  </ul>
</template>

<script>
import { useI18n } from "vue-i18n";
export default {
  props: ["mobile"],
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";
@import "@/assets/style/sass/query.scss";
@import "@/assets/style/sass/query.scss";
.divider {
  background: #b7b7b7 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  height: 2px;
  width: 100%;
  &:first-of-type {
    margin-bottom: 27px;
  }
}
ul {
  list-style: none;
  margin: 0;

  li {
    display: block;
    padding: 0px 25px 24px 0px;
    &:first-of-type {
      padding-top: 20px;
    }
    a {
      text-decoration: none;
      font-size: 14px;
      position: relative;
      font-family: "Bahij-Bold";
      color: #707070;
      .link-icon {
        margin-left: 10px;
      }
      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 0%;
        content: ".";
        color: transparent;
        background: #fff;
        height: 2px;
        transition: all 0.5s;
      }
      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
  }
}
.anglish_version {
  ul {
    li {
      padding: 0px 0px 24px 25px;
      &:first-of-type {
        padding-top: 20px;
      }
      a {
        .link-icon {
          margin-left: 0px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>