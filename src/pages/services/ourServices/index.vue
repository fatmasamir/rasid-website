<template>
  <div class="container">
    <div class="header">
      <h3>{{ t("services_header") }}</h3>
      <p>{{ t("services_paragraph") }}</p>
    </div>
    <Card :data="computedServices" />
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

    const services = ref([
      {
        id: 1,
        icon: require("../../../assets/icons/service1.png"),
        title: computed(() => t("service_one_title")),

        description: computed(() => t("service_one_description")),
      },
      {
        id: 2,
        icon: require("../../../assets/icons/service2.png"),
        title: computed(() => t("service_two_title")),

        description: computed(() => t("service_two_description")),
      },
      {
        id: 3,
        icon: require("../../../assets/icons/service3.png"),
        title: computed(() => t("service_three_title")),

        description: computed(() => t("service_three_description")),
      },
      {
        id: 4,
        icon: require("../../../assets/icons/service4.png"),
        title: computed(() => t("service_four_title")),

        description: computed(() => t("service_four_description")),
      },

      {
        id: 5,
        icon: require("../../../assets/icons/service5.png"),
        title: computed(() => t("service_five_title")),
        description: computed(() => t("service_five_description")),
      },
      {
        id: 6,
        icon: require("../../../assets/icons/service6.png"),
        title: computed(() => t("service_six_title")),

        description: computed(() => t("service_six_description")),
      },
    ]);
    const computedServices = computed(() => services.value);

    return {
      t,
      computedServices,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";
.header {
  text-align: center;
  padding-top: 98px;
  @include media-breakpoint-down(md) {
    padding-top: 0px;
  }
  h3 {
    font-size: 40px !important;
    margin-bottom: 18px !important;
    @include media-breakpoint-down(md) {
      font-size: 32px !important;
      margin-bottom: 0px !important;
    }
  }
  p {
    color: #707070;
    font-size: 18px;
    margin-bottom: 73px;
    @include media-breakpoint-down(md) {
      font-size: 15px !important;
      margin-bottom: 30px;
    }
  }
}
</style>