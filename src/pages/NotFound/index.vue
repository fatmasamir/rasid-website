<template>
  <div class="not_found">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <img
            src="../../assets/images/error_image.png"
            class="mw-100 mb-10 h-lg-450px"
          />
        </div>
        <div class="col-lg-5">
          <h1>الصفحة <br> ! غير موجوة</h1>
          <p>{{t("not_found")}}</p>
          <router-link to="/">{{ t("home") }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useI18n } from "vue-i18n";
export default {
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
.not_found {
  text-align: right;
  margin-bottom: 100px;
  h1{
    margin-top: 170px;
      font-family: "Bahij-Bold";
      font-size: 40px;
      line-height: 53px;
    margin-bottom: 32px;
    @include media-breakpoint-down(md) {
      font-size: 18px;
      line-height: 30px;
    margin-top: 10px;
    }
  }
  p {
    font-size: 15px;
    margin-bottom: 20px;
    color: #6F6F6F;
      font-family: "Bahij-regular";
      line-height: 38px;
  }

  a {
    border-radius: 8px;
    outline: none;
    box-shadow: none;
    border: none;
    overflow: hidden;
    color: #fff;
    font-family: "Bahij-Bold";
    border: 2px solid #d11388;
    -webkit-transition: all 0.35s;
    -moz-transition: all 0.35s;
    -o-transition: all 0.35s;
    transition: all 0.35s;
    position: relative;
    display: block;
    z-index: 2;
    background: #d11388 0% 0% no-repeat padding-box;
    border-radius: 9px;
    opacity: 1;
    color: white;
    width: 165px;
    height: 52px;
    font-size: 20px;
    line-height: 44px;
    margin: auto;
    text-decoration: none;   
    text-align: center;
     width: 165px;
    right: 0px;
    margin: 0px;
    float: right;
    &::after,
    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      top: -100%;
      left: 0;
      bottom: 100%;
      background: #fff;
      z-index: -1;
      transition: all 0.35s;
    }
    &::before {
      opacity: 0.5;
    }
    &::after {
      transition-delay: 0.2s;
    }
    &:hover {
      color: #d11388;
      border-color: #d11388;

      &:before,
      &:after {
        top: 0;
      }
    }
    @include media-breakpoint-down(md) {
      width: 100%;
      font-size: 18px;
    }
  }
}
</style>
