<template>
  <div id="contact">
    <page-header :t="t" header="contactus"></page-header>
    <Contact-us-now :t="t"></Contact-us-now>
    <form-contact :t="t"></form-contact>
    <detailes :t="t"></detailes>
  </div>
</template>

<script>
import PageHeader from "@/components/layout/pageHeader/PageHeader.vue";
import ContactUsNow from "./content/contact-us-now/index.vue";
import FormContact from "./content/form-contact/index.vue";
import Detailes from "./content/detailes/index.vue";
import { useI18n } from "vue-i18n";
export default {
  components: {
    PageHeader,
    ContactUsNow,
    FormContact,
    Detailes,
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
.contact {
}
</style>
