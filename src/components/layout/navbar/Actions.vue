<template>
  <div class="nav-actions">
    <button @click.prevent="setLang" class="switcher" :class="background">
      <span class="icon"> <i class="fa fa-globe" aria-hidden="true"></i> </span
      ><span class="text">{{ t("language_switcher") }}</span>
    </button>
    <base-button
      class="signup-header"
      link
      to="/login"
      :background="background"
      >{{ t("login") }}</base-button
    >
  </div>
</template>
<script>
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import { ref, watch, onMounted, computed } from "vue";
export default {
  props: ["mobile", "background"],
  setup() {
    const store = useStore();
    const i18n = useI18n();
    const { t } = useI18n();
    const lang = ref(localStorage.getItem("lang"));
    const language = computed(() => store.getters.language);
    i18n.locale.value = localStorage.getItem("lang")
      ? localStorage.getItem("lang")
      : "ar";
    onMounted(() => {
      store.dispatch("changeLayout");
    });
    watch([lang, language], () => {
      store.dispatch("changeLayout");
    });
    const setLang = () => {
      console.log(lang, "inset");
      if (language.value === "ar") {
        store.dispatch("setLanguage", "en");
        i18n.locale.value = "en";
      } else {
        store.dispatch("setLanguage", "ar");
        i18n.locale.value = "ar";
      }
      store.dispatch("changeLayout");
    };

    return { t, setLang };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/sass/query.scss";
.nav-actions {
  display: flex;
  align-items: center;
  @include mobile {
    padding: 0 12px;
    flex-direction: column;
    align-items: flex-start;
  }
  a {
    width: 167.15px;
  }
  .signup-header {
    width: 166px;
    height: 54px;
    line-height: 54px;
    background: #882887;
    border-color: #882887;
    &:hover {
      color: #882887;
      border-color: #882887;
    }
  }
  .switcher {
    margin-left: 41.43px;
    padding: 0;
    @include mobile {
      margin: 0 0 20px;
    }
    .icon {
      margin-left: 13.28px;
      @include mobile {
        color: #fff;
      }
    }
    .text {
      font-size: 16px;
      color: #000000;
      @include mobile {
        color: #fff;
      }
    }
    @include mobile {
      flex-direction: column;
      align-items: center;
      button {
        display: block;
      }
      .switcher {
        color: #fff;
        margin-bottom: 15px;
      }
    }
  }
  .white-background {
    .icon,
    .text {
      color: #fff;
    }
  }
}
.switcher {
  border: none;
  background: none;
}
.anglish_version {
  .nav-actions {
    .switcher {
      margin-right: 41.43px;
      margin-left: 0;
      .icon {
        margin-right: 13.28px;
        margin-left: 0;
      }
    }
  }
}
</style>