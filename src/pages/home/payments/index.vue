<template>
  <div class="payments">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-7 offset-md-1">
          <div class="content">
            <h3>{{ t("payments_header") }}</h3>
            <p>
              {{ t("payments_praragraph") }}
            </p>

            <div class="actions d-none d-md-block">
              <base-button mode="flat" link>{{ t("signup_now") }}</base-button>
              <router-link to="/">{{ t("learn_more") }}</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="image">
            <img
              src="../../../assets/images/paymentimage.png"
              alt="payments"
              class="img-fluid"
            />
          </div>
          <div class="actions d-block d-md-none">
            <base-button mode="flat" link>{{ t("signup_now") }}</base-button>
            <router-link to="/">{{ t("learn_more") }}</router-link>
          </div>
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
    return { t };
  },
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";
.payments {
  padding-top: 82.26px;
  @include media-breakpoint-down(md) {
    padding-top: 0;
    text-align: center;
  }
  .content {
    h3 {
      font-size: 40px !important;
      @include media-breakpoint-down(md) {
        font-size: 21px !important;
        margin-bottom: 0px !important;
      }
    }
    p {
      padding-left: 8.333%;
      font-size: 20px;
      @include media-breakpoint-down(md) {
        padding: 0 !important;
        color: #000000 !important;
        font-size: 18px;
        margin-bottom: 30px !important;
      }
    }
  }
  .actions {
    a {
      font-family: "Bahij-Bold";
      font-size: 19px;
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
  .image {
    @include media-breakpoint-down(md) {
      margin-bottom: 30px;
    }
  }
}
.anglish_version {
  .payments {
    .offset-md-1 {
      margin-right: 8.33333333% !important;
      margin-left: 0 !important;
    }
    .content {
      p {
        padding-right: 8.333%;
        padding-left: 0;
      }
    }
  }
}
</style>