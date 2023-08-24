<template>
  <div id="Login">
    <page-header :t="t" header="Forget"></page-header>
    <form-forget :t="t"></form-forget>
  </div>
</template>

<script>
import PageHeader from "@/components/layout/pageHeader/PageHeader.vue";
import FormForget from "./form-forget/index.vue";
import { useI18n } from "vue-i18n";
export default {
  components: {
    PageHeader,
    FormForget,
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
