<template>
  <div class="our-client">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <h3>{{ t("our_clients") }}</h3>
          <div class="conten-conteiner">
            <p>
              {{ t("our_clients_pragraph") }}
            </p>
            <!-- <div class="line"></div> -->
          </div>
        </div>
      </div>
      <div class="clientslogos">
        <div class="row">
          <div class="col-4 col-md-2 mb-sm-3 mb-3">
            <div>
              <img src="../../../assets/images/rocker.png" class="img-fluid" />
            </div>
          </div>
          <div class="col-4 col-md-2 mb-sm-3 mb-3">
            <div>
              <img src="../../../assets/images/square.png" class="img-fluid" />
            </div>
          </div>
          <div class="col-4 col-md-2 mb-sm-3 mb-3">
            <div>
              <img src="../../../assets/images/martino.png" class="img-fluid" />
            </div>
          </div>
          <div class="col-4 col-md-2">
            <div>
              <img src="../../../assets/images/paperz.png" class="img-fluid" />
            </div>
          </div>
          <div class="col-4 col-md-2">
            <div>
              <img src="../../../assets/images/square.png" class="img-fluid" />
            </div>
          </div>
          <div class="col-4 col-md-2">
            <div>
              <img src="../../../assets/images/gobona.png" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
export default {
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";
.our-client {
  @include media-breakpoint-down(lg) {
    position: relative;
    z-index: 1;
    top: -115px;
  }
  h3 {
    font-size: 29px !important;
    line-height: 39px !important;
    margin-bottom: 21px;
    @include media-breakpoint-down(lg) {
      color: #d11388;
      font-size: 32px;
      text-align: center;
      margin-bottom: 17px !important;
    }
  }
  p {
    color: #6f6f6f;
    font-size: 19px;
    line-height: 25px;
    margin: 0;
    @include media-breakpoint-down(lg) {
      font-size: 15px;
      text-align: center;
    }
  }
  .conten-conteiner {
    display: flex;
    flex-direction: row;
    // .line {
    //   height: 1.0388px;
    //   background: #c5c5c5;
    //   width: 63%;

    //   margin-top: 41px;
    //   margin-right: 25px;
    // }
  }
  .clientslogos {
    div {
      -webkit-transition: 0.5s ease-in;
      -moz-transition: 0.5s ease-in;
      -o-transition: 0.5s ease-in;
      transition: 0.5s ease-in;
      cursor: pointer;
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }

    margin: 42.5px 0 90.49px;
    @include media-breakpoint-down(lg) {
      margin: 33.69px 0 0px;
    }
  }
}
</style>