<template>
  <footer class="footer">
    <div class="content_footer">
      <mobile-content />
      <div class="container">
        <formes :t="t" />
        <linkes :t="t" />
      </div>
      <rights-all :t="t" />
    </div>
  </footer>
</template>
<script>
import Formes from "./contentFooter/Formes.vue";
import Linkes from "./contentFooter/Linkes.vue";
import RightsAll from "./contentFooter/RightsAll.vue";
import MobileContent from "./contentFooter/MobileContent.vue";
import { useI18n } from "vue-i18n";
export default {
  components: {
    Formes,
    Linkes,
    RightsAll,
    MobileContent,
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
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";
footer {
  position: relative;
  background: url(../../../assets/images/footer_ar.png) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  @include media-breakpoint-down(lg) {
    background: none;
    height: auto;
  }
  // height: 100%;
  // width: 100%;
  .content_footer {
    text-align: center;
    width: 100%;
    padding-top: 150px;
    color: white;
    @include media-breakpoint-down(lg) {
      padding-top: 0px;
    }
    .container {
      @include media-breakpoint-down(lg) {
        display: none;
      }
    }
  }
}
.anglish_version {
  footer {
    background: url(../../../assets/images/footer_en.png) no-repeat center center;
    direction: ltr;
    text-align: left;
    @include media-breakpoint-down(lg) {
      background: none;
      height: auto;
    }
  }
}
</style>
