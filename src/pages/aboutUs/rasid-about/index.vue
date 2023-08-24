<template>
  <section class="rasid-about">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="rigth_content">
            <h2>{{ t("rasid_header") }}</h2>
            <p>
              {{ t("rasid_pragraph") }}
            </p>
            <base-button :link="false" mode="buttonStyle">{{ t("Sign") }}</base-button>
          </div>
        </div>

        <div class="col-lg-5">
          <div class="img_rasid">
            <img src="@/assets/images/Component.png" alt="" class="img1" />
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
@import "@/assets/style/sass/query.scss";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";
.rasid-about {
  direction: rtl;
  margin-top: 100px;
  @include media-breakpoint-down(lg) {
    margin-top: 28px;
  }
  .img_rasid {
    position: relative;
    text-align: center;
    img {
      height: 529px;
      margin-top: 30px;
      @include media-breakpoint-down(lg) {
        width: 264px;
        height: 411px;
      }
      @include landscape_tablets {
        width: auto;
        height: 529px;
      }
    }
  }
  .col-md-7 {
    padding: 0px;
  }
  .rigth_content {
    text-align: right;
    padding-top: 25%;
    padding-right: 20px;
    @include media-breakpoint-down(lg) {
      text-align: center;
      padding: 30px 10px;
    }
    @include laptops {
      padding-top: 25%;
    }

    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 52px;
      margin-bottom: 36px;
      font-style: normal !important;
      font-weight: bold !important;
      font: normal normal bold 40px/59px;
      @include media-breakpoint-down(lg) {
        font-size: 36px;
        color: #d11388;
        margin-bottom: 10px;
        font: normal normal bold 36px/59px;
      }
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 33px;
      color: #6f6f6f;
      width: 575px;
      margin-bottom: 36px;
      @include media-breakpoint-down(md) {
        width: 100%;
        font-size: 15px;
      }
      @include laptops {
        width: auto;
      }
      @include landscape_tablets {
        width: 100%;
        font-size: 15px;
      }
    }
    button {
      width: 40%;
      height: 64px;
      background: #d11388;
      @include media-breakpoint-down(lg) {
        width: 67%;
      }
    }
  }
}
.anglish_version {
  .rasid-about {
    direction: ltr;
    .rigth_content {
      padding-left: 17px;
      padding-right: 0px;
      text-align: left;
      @include media-breakpoint-down(lg) {
        padding-left: 0px;
        text-align: center;
      }
    }
  }
}
</style>
