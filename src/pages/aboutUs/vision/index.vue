<template>
  <section class="vision">
    <img src="@/assets/images/Rectangle.png" class="img_header" alt="img_header" />
    <img
      src="@/assets/images/mobile_vision.png"
      class="img_header_mobile"
      alt="img_header_mobile"
    />
    <div class="vision_content">
      <div class="container">
        <h2>{{ t("our vision") }}</h2>
        <div class="row">
          <div class="row1">
            <p>
              {{ t("vision_pragraph1") }}
            </p>
          </div>
          <div class="row2">
            <p>
              {{ t("vision_pragraph2") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["t"],
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";
.vision {
  position: relative;
  margin-top: 100px;
  text-align: right;
  color: white;
  width: 100%;
  height: 441px;
  @include media-breakpoint-down(lg) {
    height: auto;
  }
  img {
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: -1;
    height: 100%;
    width: 100%;
  }
  .img_header {
    display: block;
    @include media-breakpoint-down(lg) {
      display: none;
    }
  }
  .img_header_mobile {
    display: none;
    @include media-breakpoint-down(lg) {
      display: block;
    }
  }
  .vision_content {
    direction: rtl;
    width: 70%;
    padding-top: 55px;
    margin: auto;
    text-align: center;
    @include media-breakpoint-down(lg) {
      width: 100%;
      padding-bottom: 55px;
    }
    h2 {
      margin-bottom: 25px;
      font-size: 40px;
      font-style: normal !important;
      font-weight: bold !important;
      @include media-breakpoint-down(lg) {
        margin-bottom: 85px;
      }
    }
    p {
      font-family: "Bahij-regular" !important;
      margin-top: 10px;
      width: 99%;
      font-style: normal;
      font-size: 20px;
      line-height: 33px;
      margin: auto;
      margin-bottom: 25px;
      opacity: 0.9;
    }
    .row1 {
      p {
        width: 57%;
      }
    }
    .row2 {
      p {
        width: 76%;
      }
    }
    .row1,
    .row2 {
      p {
        @include media-breakpoint-down(lg) {
          width: 100%;
        }
      }
    }
  }
}
.anglish_version {
  .vision {
    .img_header {
      transform: scaleX(-1);
      display: block;
      @include media-breakpoint-down(lg) {
        display: none;
      }
    }
    .img_header_mobile {
      display: none;
      @include media-breakpoint-down(lg) {
        display: block;
      }
    }
    .vision_content {
      direction: ltr;
      text-align: center;

      .row1 {
        p {
          width: 69%;
        }
      }
    }
  }
}
</style>
