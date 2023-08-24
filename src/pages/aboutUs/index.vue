<template>
  <div id="About">
    <page-header :t="t" header="aboutus"></page-header>
    <div class="clearfix"></div>
    <rasid-about :t="t" />
    <div class="clearfix"></div>
    <vision :t="t" />
    <div class="clearfix"></div>
    <slider-review :t="t"></slider-review>
  </div>
</template>

<script>
import SliderReview from "@/components/layout/sliders/SliderReview.vue";
import PageHeader from "../../components/layout/pageHeader/PageHeader.vue";
import RasidAbout from "./rasid-about/index.vue";
import Vision from "./vision/index.vue";
import { useI18n } from "vue-i18n";
export default {
  components: {
    SliderReview,
    PageHeader,
    RasidAbout,
    Vision,
  },
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/query.scss";
html {
  width: 100% !important;
}
#About {
}
.anglish_version {
}
</style>
