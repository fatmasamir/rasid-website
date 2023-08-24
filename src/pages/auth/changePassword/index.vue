<template>
  <div id="Login">
    <page-header :t="t" header="change_pass"></page-header>
    <form-reset :t="t"></form-reset>
  </div>
</template>

<script>
import PageHeader from "@/components/layout/pageHeader/PageHeader.vue";
import FormReset from "./form-reset/index.vue";
import { useI18n } from "vue-i18n";
export default {
  components: {
    PageHeader,
    FormReset,
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
