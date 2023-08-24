<template>
  <header>
    <navbar></navbar>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="header-content">
            <h1>{{ t("header_heading") }}</h1>
            <p>
              {{ t("header_parag") }}
            </p>
          </div>
          <div class="download-app d-none d-md-block">
            <a href="#"
              ><img
                src="../../../assets/images/Google-play.png"
                class="img-fluid"
                alt="Google-play"
            /></a>
            <a href="#"
              ><img
                src="../../../assets/images/App-Store.png"
                class="img-fluid"
                alt="App-Store"
            /></a>
          </div>
        </div>
        <div class="col-md-4 d-md-none mobil-background-header">
          <div class="download-app">
            <a href="#"
              ><img
                src="../../../assets/images/Google-play-mob.png"
                class="img-fluid"
                alt="Google-play"
            /></a>
            <a href="#"
              ><img
                src="../../../assets/images/App-Store-mob.png"
                class="img-fluid"
                alt="App-Store"
            /></a>
          </div>
          <img
            :src="
              language === 'ar'
                ? require('../../../assets/images/logo-with-J.png')
                : require('../../../assets/images/mob-nav-en.png')
            "
            class="img-fluid"
            alt="logo-with-J"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const { t } = useI18n();
    const language = computed(() => store.getters.language);

    return { t, language };
  },
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";
header {
  position: relative;
  background: url(../../../assets/images/hom-header-back.png) no-repeat center
    center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 769px;
  padding-top: 56.07px;
  @include media-breakpoint-down(md) {
    padding-top: 0px;
    background: none;
    text-align: center;
  }
  .mobil-background-header {
    @include media-breakpoint-down(md) {
      position: relative;
      .download-app {
        position: absolute;
        top: 63px;
        a {
          display: block;
          margin-left: 0 !important;
          &:first-of-type {
            margin-bottom: 12px;
          }
          img {
            width: 100px;
            height: 33px;
          }
        }
      }
    }
  }
  .header-content {
    color: #fff !important;
    position: relative;
    z-index: 1;
    padding-top: 100px;
    padding-left: 23%;
    @include media-breakpoint-down(md) {
      padding-left: 0;
      padding-top: 23px;
    }

    h1 {
      font-size: 36px;
      line-height: 55px;
      font-family: "Bahij-Bold";
      @include media-breakpoint-between(md, xl) {
        font-size: 25px;
      }
      @include media-breakpoint-down(md) {
        color: #d11388;
        font-size: 21px;
      }
    }
    p {
      font-size: 15px;
      line-height: 32px;
      @include media-breakpoint-down(md) {
        color: #6f6f6f;
      }
    }
  }
  .download-app {
    margin-top: 20px;
    a {
      &:first-of-type {
        margin-left: 6.43px;
      }
      img {
        width: 176px;
        height: 54px;
      }
    }
  }
}
.anglish_version {
  header {
    position: relative;
    background: url(../../../assets/images/hom-header-back-en.png) no-repeat
      center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 769px;
    padding-top: 56.07px;
    @include media-breakpoint-down(md) {
      padding-top: 0px;
      background: none;
      text-align: center;
    }
    .mobil-background-header {
      @include media-breakpoint-down(md) {
        position: relative;
        .download-app {
          position: absolute;
          top: 63px;
          a {
            display: block;
            margin-left: 0 !important;
            &:first-of-type {
              margin-bottom: 12px;
            }
            img {
              width: 100px;
              height: 33px;
            }
          }
        }
      }
    }
    .header-content {
      padding-right: 23%;
      padding-left: 0;
      @include media-breakpoint-down(md) {
        padding-right: 0;
      }
    }
    .download-app {
      a {
        &:first-of-type {
          margin-left: 0;
          margin-right: 6.43px;
        }
      }
    }
  }
}
</style>