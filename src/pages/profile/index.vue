<template>
  <div class="profile-container">
    <page-header :t="t" header="profile"></page-header>
    <div class="container">
      <div class="profile-detail">
        <Form></Form>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "../../components/layout/pageHeader/PageHeader.vue";
import Form from "./form/index.vue";
import { useI18n } from "vue-i18n";
export default {
  components: { PageHeader, Form },
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
};
</script>

<style scoped lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";
.profile-container {
  .profile-detail {
    background: url(../../assets/images/profile-background.png) no-repeat center
      center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    margin: 61px 0 80px;
    padding: 43px 91px 60px;
    @include media-breakpoint-down(md) {
      padding: 0;
      background: none;
      margin: 0px 0 46px;
    }
  }
}
</style>