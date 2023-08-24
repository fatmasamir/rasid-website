<template>
  <Header></Header>
  <our-clients></our-clients>
  <features></features>
  <payments></payments>
  <mangement></mangement>
  <slider-review :t="t"></slider-review>
</template>

<script>
import Features from "./features/index.vue";
import Payments from "./payments/index.vue";
import Mangement from "./mangement/index.vue";
import OurClients from "./ourClients/index.vue";
import Header from "./header/index.vue";
import SliderReview from "@/components/layout/sliders/SliderReview.vue";
import { useI18n } from "vue-i18n";
export default {
  components: {
    Header,
    Features,
    Payments,
    Mangement,
    OurClients,
    SliderReview,
  },
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
};
</script>

<style scoped>
</style>