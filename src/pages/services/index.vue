<template>
  <div class="services">
    <page-header :t="t" header="our_services"></page-header>
    <services></services>
  </div>
</template>

<script>
import PageHeader from "../../components/layout/pageHeader/PageHeader.vue";
import Services from "./ourServices/index.vue";
import { useI18n } from "vue-i18n";
export default {
  components: { PageHeader, Services },
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
};
</script>

<style scoped>
.services {
  padding-bottom: 40px;
}
</style>