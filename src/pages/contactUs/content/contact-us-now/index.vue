<template>
  <div class="ContactUsNow">
    <img src="@/assets/images/big_size.png" class="img_big" />
    <div class="content">
      <h2>{{ t("Contact_Now") }}</h2>
      <p>{{ t("features_paragraph") }}</p>
    </div>
    <img src="@/assets/images/small_size.png" class="small_size" />
  </div>
</template>

<script>
export default {
  props: ["t"],
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/sass/query.scss";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";
.ContactUsNow {
  position: relative;
  height: 560px;
  @include media-breakpoint-down(lg) {
    height: auto;
  }
  .img_big {
    position: absolute;
    top: 0px;
    z-index: -1;
    height: 100%;
    width: 100%;
    @include media-breakpoint-down(lg) {
      display: none;
    }
  }
  .small_size {
    display: none;
    height: 161px;
    position: relative;
    width: 100%;
    transform: rotateY(0deg);
    @include media-breakpoint-down(lg) {
      display: block;
      transform: rotateY(0deg);
    }
    @include portrait_tablets {
      height: auto;
    }
  }
  .content {
    padding-top: 200px;
    margin-right: 140px;
    width: 350px;
    @include media-breakpoint-down(lg) {
      width: 90%;
      text-align: center;
      padding-top: 30px;
      margin-right: 0px;
      padding-bottom: 0px;
      margin: auto;
    }
    h2 {
      font-family: "Bahij-Bold";
      color: #8b298a;
      @include media-breakpoint-down(lg) {
        font-size: 36px;
      }
    }
    p {
      font-family: "Bahij-regular";
      color: #707070;
      padding-top: 16px;
      @include media-breakpoint-down(lg) {
        padding-top: 8px;
        margin-bottom: 0px !important;
        font-size: 15px;
      }
    }
  }
}
.anglish_version {
  .ContactUsNow {
    .content {
      margin-left: 140px;
      margin-right: 0px;
      @include media-breakpoint-down(lg) {
        margin: auto;
      }
    }
    img {
      transform: rotateY(180deg);
    }
  }
}
</style>
