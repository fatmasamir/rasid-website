<template>
  <div class="features">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 offset-md-1 features-content">
          <h3>{{ t("features_header") }}</h3>
          <p>
            {{ t("features_paragraph") }}
          </p>
          <base-button mode="outline" link>{{ t("signup") }}</base-button>
        </div>
        <div class="col-lg-6 faetures-cards-container">
          <Card :features="features" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import Card from "./Card.vue";
export default {
  components: {
    Card,
  },
  setup() {
    const { t } = useI18n();

    const appFeatures = ref([
      {
        icon: require("../../../assets/icons/Shopping.png"),
        title: computed(() => t("first_feature")),
        classname: "shopping",
        description: computed(() => t("feature_description")),
      },
      {
        icon: require("../../../assets/icons/text.png"),
        title: computed(() => t("second_feature")),
        classname: "cheque",
        description: computed(() => t("feature_description")),
      },
      {
        icon: require("../../../assets/icons/gift.png"),
        title: computed(() => t("third_feature")),
        classname: "gift",
        description: computed(() => t("feature_description")),
      },
      {
        icon: require("../../../assets/icons/lock.png"),
        title: computed(() => t("fourth_feature")),
        classname: "lock",
        description: computed(() => t("feature_description")),
      },
    ]);
    const features = computed(() => appFeatures.value);

    return {
      t,
      features,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/sass/query.scss";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";

.features {
  background: url(../../../assets/images/featers.png) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 910px;
  padding: 158.57px 0 119.17px 0;
  @include media-breakpoint-down(lg) {
    height: auto;
  }
  @include landscape_tablets {
    padding: 100px 0 119.17px 0;
  }
  @include media-breakpoint-down(md) {
    height: auto;
    background: none;
    text-align: center;
    padding: 0px 0 30px 0;
    margin-top: -70px;
    .features-content {
      background: url(../../../assets/images/featers-mob.png) no-repeat center
        center;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      text-align: center;
      height: 503px;
    }
  }
  h3,
  p {
    color: #fff;
  }
  h3 {
    margin-bottom: 26.63px !important;
    @media (min-width: 767.98px) and (max-width: 991.98px) {
      text-align: center;
    }
    @include media-breakpoint-down(md) {
      padding-top: 43.49px;
      margin-bottom: 28px !important;
    }
  }
  p {
    margin-bottom: 51.63px;
    padding-left: 50px;
    font-size: 20px;
    @media (min-width: 767.98px) and (max-width: 991.98px) {
      text-align: center;
      padding: 0;
    }
    @include landscape_tablets {
      padding: 0;
    }
    @include media-breakpoint-down(md) {
      padding: 0;
      margin-bottom: 46px;
    }
  }
  @include media-breakpoint-down(md) {
    .custom-class {
      display: block;
    }
    .faetures-cards-container {
      margin-top: -90px;
    }
  }
  a {
    @media (min-width: 767.98px) and (max-width: 991.98px) {
      text-align: center;
      margin: 0 auto;
      display: block;
      margin-bottom: 60px;
    }
  }
}
.anglish_version {
  .features {
    background: url(../../../assets/images/featers-en.png) no-repeat center
      center;
    p {
      padding-left: 0;
      padding-right: 50px;
    }
    .offset-md-1 {
      margin-right: 8.33333333% !important;
      margin-left: 0 !important;
    }
  }
}
</style>