<template>
  <ul>
    <li>
      <router-link to="/">{{ t("home") }}</router-link>
    </li>
    <li>
      <router-link to="/services">{{ t("services") }}</router-link>
    </li>
    <li>
      <router-link to="/about-us">{{ t("aboutus") }}</router-link>
    </li>
    <li>
      <router-link to="/contact-us">{{ t("contactus") }}</router-link>
    </li>
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
ul {
  list-style: none;
  margin: 0;
  @include mobile {
    padding: 15px 12px !important;
  }
  li {
    display: inline-block;
    padding: 0 0 0 51px;
    @include media-breakpoint-between(md, xl) {
      padding: 0 0 0 15px;
    }
    @include mobile {
      display: block;
      padding: 0 0 20px 0 !important;
    }
    a {
      text-decoration: none;
      font-size: 14px;
      position: relative;
      font-family: "Bahij-Bold";
      color: #fff;

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
    a.router-link-active {
      &::after {
        width: 100%;
      }
    }
  }
}
.anglish_version {
  ul {
    li {
      padding: 0 51px 0 0;
      @include media-breakpoint-between(md, xl) {
        padding: 0 15px 0 0;
      }
    }
  }
}
</style>