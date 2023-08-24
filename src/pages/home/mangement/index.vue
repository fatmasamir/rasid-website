<template>
  <div class="management">
    <div class="container-fluid">
      <div class="row management-custom-row">
        <div class="col-md-7 ps-md-5">
          <div class="mangement-container">
            <h3>{{ t("manage_businss_header") }}</h3>
            <p>
              {{ t("manage_businss_paragrph") }}
            </p>
            <div class="advantages">
              <div class="card">
                <div class="icon Shopping">
                  <img
                    src="../../../assets/icons/Shopping.png"
                    class="img-fluid"
                  />
                </div>
                <div class="contents">
                  <h4>{{ t("first_feature") }}</h4>
                  <p>{{ t("first_feature_paragraph") }}</p>
                </div>
              </div>
              <div class="card">
                <div class="icon lock">
                  <img src="../../../assets/icons/lock.png" class="img-fluid" />
                </div>
                <div class="contents">
                  <h4>{{ t("second_feature") }}</h4>
                  <p>{{ t("second_feature_paragraph") }}</p>
                </div>
              </div>
            </div>
            <div class="actions">
              <base-button mode="flat">{{ t("signup_now") }}</base-button>
              <router-link to="/">{{ t("learn_more") }}</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-5 ps-md-0 image-cont">
          <div class="image">
            <img
              class="d-none d-md-block"
              :src="
                language === 'ar'
                  ? require('../../../assets/images/manage.png')
                  : require('../../../assets/images/manage-en.png')
              "
              alt="payments"
            />
            <img
              class="d-block d-md-none"
              :src="
                language === 'ar'
                  ? require('../../../assets/images/manage-mob.png')
                  : require('../../../assets/images/manage-en.png')
              "
              alt="payments"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";
@import "@/assets/style/sass/query.scss";
.management {
  background: url(../../../assets/images/mangementbackground.png) no-repeat
    center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 946px;
  margin-top: 80.08px;
  padding: 242.82px 0 61.54px;
  overflow-x: hidden;
  @include media-breakpoint-down(md) {
    height: auto;
    background: url(../../../assets/images/mangementbackgroundmob.png) no-repeat
      left center;
    padding: 0px 0 61.54px;
    margin-top: 0;
    .management-custom-row {
      flex-direction: column-reverse;
    }
    .image-cont {
      .image {
        margin-top: 30px;
      }
    }
  }
  .mangement-container {
    h3 {
      font-size: 40px !important;
      @include landscape_tablets {
        font-size: 25px !important;
      }
      @include media-breakpoint-down(md) {
        font-size: 24px !important;
        line-height: 40px !important;
        text-align: center;
      }
    }
    p {
      margin-bottom: 31.79px !important;
      color: #6f6f6f;
      font-size: 20px;
      padding-left: 8.333%;
      @include media-breakpoint-down(md) {
        font-size: 16px;
        padding-left: 0;
        text-align: center;
      }
    }
    @include media-breakpoint-between(md, xl) {
      margin-right: 1.3rem;
    }
    @include media-breakpoint-up(xl) {
      margin-right: 6.3rem;
    }
  }

  .card {
    width: 530px;
    height: 115px;
    background: #ffffff;
    border: 1px solid #d7d7d7;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 10.79px;
    display: flex;
    align-items: center;
    @media (min-width: 767.98px) and (max-width: 991.98px) {
      width: 100%;
    }
    &:last-of-type {
      margin-bottom: 34.11px;
    }
    padding: 0 20.77px;
    flex-direction: row;
    @include media-breakpoint-down(md) {
      width: 100%;
      box-shadow: 0px 3px 6px #00000029;
      margin-bottom: 20px;
      &:last-of-type {
        margin-bottom: 51px;
      }
    }
    .icon {
      width: 58px;
      height: 58px;
      line-height: 58px;
      border-radius: 50%;
      text-align: center;
      margin-left: 18.54px;
      @include media-breakpoint-down(md) {
        width: 50px;
        height: 50px;
        line-height: 50px;
      }
      img {
        width: 25px;
        height: 25px;
        @include media-breakpoint-down(md) {
          width: 30px;
          height: 30px;
        }
      }
    }
    .Shopping {
      background: #feeceb;
    }

    .lock {
      background: #ecebef;
    }
    .contents {
      color: #000000;
      h4 {
        font-size: 21px;
        line-height: 17px;
        margin-bottom: 8.71px;
        font-family: "Bahij-Bold";
      }
      p {
        padding: 0;
        font-size: 15px;
        line-height: 19px;
        color: #19191b;
        margin-bottom: 0 !important;
        text-align: initial;
      }
    }
  }

  .actions {
    width: 255px;
    @include media-breakpoint-down(md) {
      width: 100%;
      text-align: center;
      padding-bottom: 21px;
    }
    a {
      display: block;
      color: #d11388;
      text-decoration: none;
      text-align: center;
      margin-top: 15.87px;
      font-family: "Bahij-Bold";
      font-size: 19px;
    }
  }
  .image {
    img {
      @include media-breakpoint-down(md) {
        width: 100%;
      }
    }
  }
}
.anglish_version {
  .management {
    padding: 242.82px 61.54px 0;
    @include media-breakpoint-down(md) {
      padding: 0;
    }
    .ps-md-5 {
      padding-left: 0 !important;
      padding-right: 3rem !important;
      @include media-breakpoint-down(md) {
        padding-right: 20.8px !important;
      }
    }
    .mangement-container {
      p {
        padding-left: 0;
        padding-right: 8.333%;
      }
      @include media-breakpoint-down(xl) {
        margin-right: 0;
        margin-left: 1.3rem;
      }
      @include media-breakpoint-up(xl) {
        margin-right: 0;
        margin-left: 3.6rem;
      }
    }

    .card {
      .icon {
        margin-right: 18.54px;
        margin-left: 0;
      }
    }
  }
}
</style>