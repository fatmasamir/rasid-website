<template>
  <secton class="what_client_call">
    <div class="container">
      <h2>{{ t("What do our customers say?") }}</h2>
      <p>
        {{ t("sliderparagraph1_en") }}
      </p>
      <div class="slider_client">
        <carousel
          :settings="settings"
          :breakpoints="breakpoints"
          :autoplay="3000"
          :wrap-around="true"
        >
          <slide v-for="slide in 10" :key="slide">
            <div class="review">
              <ul>
                <li class="reviewer_info">
                  <img src="@/assets/images/man.png" alt="reviewer" />
                  <div>
                    <h4>Mohamed Ibrahim</h4>
                    <p>ui/ux designer</p>
                  </div>
                </li>
                <li>
                  <img src="@/assets/icons/reviewIcon.png" alt="reviewer" />
                </li>
              </ul>
              <p>
                {{ t("sliderparagraph2_en") }}
              </p>
            </div>
          </slide>

          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
    </div>
  </secton>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { reactive } from "vue";
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: ["t"],
  setup() {
    // carousel settings
    const settings = reactive({
      itemsToShow: 1,
      snapAlign: "center",
    });
    const breakpoints = reactive({
      // 700px and up
      700: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: "start",
      },
    });
    return {
      settings,
      breakpoints,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";
.what_client_call {
  display: block;
  padding: 100px 0px;
  text-align: center;
  width: 100%;
  .container {
    padding: 0px 20px;
    h2 {
      font-weight: bold;
      font-size: 40px;
      line-height: 52px;
      text-align: center;
      color: #1f0314;
      font-style: normal !important;
      font-weight: bold !important;
      @include media-breakpoint-down(lg) {
        font: normal normal bold 32px/52px;
      }
    }

    p {
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 28px;
      /* or 156% */

      text-align: center;

      color: #4d4d4d;
      width: auto;
      margin: auto;
    }

    .slider_client {
      direction: ltr;
      .review {
        border: 1px solid #dbdbdb;
        margin: 50px 10px 20px;
        padding: 20px 5px;
        &:hover {
          box-shadow: 0px 0px 7px #d1138899;
        }
        img {
          vertical-align: baseline;
        }
        ul {
          direction: rtl;
          padding: 0px;
          li {
            width: auto;
            display: inline-block;
            align-items: center;
            justify-content: space-between;
          }
          .reviewer_info {
            width: 82%;
            text-align: right;
            display: inline-block;
            img {
              display: inline-block;
              width: 40px;
              height: 40px;
              border-radius: 100%;
            }
            div {
              padding-right: 10px;
              display: inline-block;
              h4 {
                font-style: normal;
                font-weight: bold;
                font-size: 17.6773px;
                line-height: 21px;
                text-align: right;
                margin: 0px;
              }
              p {
                color: #d11388;
                text-align: right;
                text-transform: capitalize;
                padding: 0px;
              }
            }
          }
        }
        p {
          width: auto;
          padding: 15px 0px;
          font-size: 16px;
        }
      }
    }
  }
}
.anglish_version {
  .what_client_call {
    .slider_client {
      .review {
        ul {
          direction: ltr;
          .reviewer_info {
            text-align: left;
            div {
              padding-right: 0px;
              padding-left: 10px;
              p {
                text-align: left;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<style>
.carousel__prev,
.carousel__next {
  display: none;
  background: transparent;
}
.carousel__icon {
  fill: #d11388;
  width: 50px;
  height: 50px;
}
.carousel__pagination-button {
  background-color: #d1138885;
}
.carousel__pagination-button--active {
  background: #d11388;
}
.carousel__pagination {
  display: none;
}
</style>
