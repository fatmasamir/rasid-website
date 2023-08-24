<template>
  <nav>
    <div class="container">
      <div class="nav-desktop">
        <div class="nav-right">
          <div class="logo">
            <img
              src="../../../assets/images/logo.png"
              class="img-fluid"
              alt="logo"
            />
            <i class="mobile-icon fa fa-bars" @click="showMobileMenu"></i>
          </div>
          <div class="switcher-mob">
            <button
              @click.prevent="setLang"
              class="switcher"
              :class="background"
            >
              <span class="icon">
                <i class="fa fa-globe" aria-hidden="true"></i> </span
              ><span class="text">{{ t("language_switcher") }}</span>
            </button>
          </div>
          <links></links>
        </div>
        <div class="nav-left">
          <Actions :background="background" />
        </div>
      </div>
      <transition name="nav-mobile">
        <div class="nav-mobil" v-if="mobile">
          <div class="right-background">
            <div class="navmobile-header">
              <div class="container-fluid">
                <div class="navmobile-header-content">
                  <div class="logo">
                    <img
                      src="../../../assets/images/logo.png"
                      class="img-fluid"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="navmob-footer">
              <MobileLinks></MobileLinks>

              <div class="actions-container">
                <router-link to="/signup"
                  ><span class="link-icon"
                    ><img src="../../../assets/icons/exit-sign.png" /></span
                  >{{ t("signup") }}</router-link
                >
              </div>
            </div>
          </div>
          <div class="left-background">
            <div>
              <span class="close-icon" @click="showMobileMenu"
                ><img src="../../../assets/icons/remove.png"
              /></span>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
import MobileLinks from "./MobileLinks.vue";
import Links from "./Links.vue";
import Actions from "./Actions.vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import { ref, watch, onMounted, computed } from "vue";
export default {
  props: ["background"],
  components: {
    MobileLinks,
    Actions,
    Links,
  },
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
  data() {
    return { mobile: false };
  },
  methods: {
    showMobileMenu() {
      this.mobile = !this.mobile;
      console.log("mobile", this.mobile);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";
@import "@/assets/style/sass/query.scss";
nav {
  @include media-breakpoint-down(md) {
    background: url(../../../assets/images/navbar-mob.png) no-repeat center
      center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100%;
    height: 160px;
    padding: 20px 12px 20px;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      display: inline-block;
      padding: 0 5px;
    }
  }

  .nav-actions {
    .switcher {
      color: #fff !important;
      .text {
        color: #fff !important;
      }
    }
  }

  .nav-desktop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // @include media-breakpoint-down(md) {
    //   padding: 20px 12px 20px;
    // }

    .nav-right {
      display: flex;
      align-items: center;

      .switcher-mob {
        position: absolute;
        left: 20px;
        top: 20px;
          display: none;
        @include media-breakpoint-down(md) {
          display: block;
        }
        button {
          background: none;
          outline: none;
          font-size: 14px;
          color: #fff;
          border: none;
        }
        .text {
          margin-right: 15px;
        }
      }
      .logo {
        margin-left: 68.88px;
        @include media-breakpoint-between(md, xl) {
          margin-left: 25px;
        }
        .fa-bars {
          @include media-breakpoint-down(md) {
            display: block;
            text-align: right;
            margin-top: 10px;
          }
        }
      }
      img {
        width: 106.3px;
        height: 42.34px;
      }

      ul {
        @include mobile {
          display: none;
        }
      }
    }
    .nav-left {
      .nav-actions {
        @include mobile {
          display: none;
        }
      }
    }
  }
  .mobile-icon {
    color: #fff;
    font-size: 20px;
    @include otherScreens {
      display: none;
    }
  }

  .nav-mobil {
    position: fixed;
    left: 0;
    width: 100%;
    top: 0;
    height: 401px;
    //background: #070707;
    z-index: 5;
    display: flex;

    @include otherScreens {
      display: none;
    }
    .right-background {
      width: 72.222%;
      height: 100%;
      .navmobile-header {
        background: transparent
          linear-gradient(180deg, #8b298a 0%, #d11388 100%) 0% 0% no-repeat
          padding-box;

        height: 81px;
        line-height: 81px;
        .navmobile-header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
      .navmob-footer {
        height: 320px;
        background: url(../../../assets/images/mob-manu-background.png)
          no-repeat center center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        box-shadow: 0px 3px 6px #00000029;
        .actions-container {
          padding: 24px 25px 0px 0px;
          a {
            text-decoration: none;
            font-size: 14px;
            position: relative;
            font-family: "Bahij-Bold";
            color: #707070;
            .link-icon {
              margin-left: 10px;
            }
          }
        }
      }
    }
    .left-background {
      background: #000000 0% 0% no-repeat padding-box;
      opacity: 0.7;
      width: 27.778%;
      .close-icon {
        position: absolute;
        left: 40px;
        top: 53px;
        z-index: 11111111111;
      }
    }
  }

  .nav-mobile-enter-from,
  .nav-mobile-leave-to {
    top: -100%;
    // transform: scale(0.8);
  }
  .nav-mobile-enter-active {
    transition: all 0.5s ease-out;
  }
  .nav-mobile-leave-active {
    transition: all 0.5s ease-in;
  }
  .nav-mobile-enter-to,
  .nav-mobile-leave-from {
    top: 0;
    // transform: scale(1);
  }
}
.anglish_version {
  nav {
    @include media-breakpoint-down(md) {
      background: url(../../../assets/images/nav-header-en.png) no-repeat center
        center;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      height: 170px;
    }
    .nav-desktop {
      .nav-right {
        .logo {
          margin-right: 68.88px;
          margin-left: 0px;
          .fa-bars {
            text-align: left;
          }
          @include media-breakpoint-between(md, xl) {
            margin-left: 0px;
            margin-right: 25px;
          }
        }
        .switcher-mob {
          left: auto;
          right: 20px;
          .text {
            margin-right: 0;
            margin-left: 15px;
          }
        }
      }
    }
    .nav-mobil {
      .right-background {
        .navmob-footer {
          ul {
            li {
              padding: 0;
            }
          }
          .actions-container {
            padding: 24px 0 0px 25px !important;
            a {
              .link-icon {
                margin-right: 10px;
                margin-left: 0;
                img {
                  transform: rotateY(180deg);
                }
              }
            }
          }
        }
      }
      .left-background {
        .close-icon {
          position: absolute;
          left: auto;
          right: 40px;
        }
      }
    }
  }
}
</style>
