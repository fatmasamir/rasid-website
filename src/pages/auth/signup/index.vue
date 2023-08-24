<template>
  <div class="signup">
    <page-header :t="t" header="new_signup"></page-header>
    <form-login :t="t"></form-login>
  </div>
</template>

<script>
import PageHeader from "@/components/layout/pageHeader/PageHeader.vue";
import FormLogin from "./form-signup/index.vue";
import { useI18n } from "vue-i18n";
export default {
  components: {
    PageHeader,
    FormLogin,
  },
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
};
</script>

<style lang="scss" scoped></style>
