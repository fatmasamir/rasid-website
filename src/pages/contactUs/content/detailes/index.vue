<template>
  <div class="detailes">
    <h5>{{ t("Contact") }}</h5>
    <ul>
      <li>
        <img src="@/assets/icons/location.png" />
        <p>
          {{ t("headquarters address") }}<br />
          {{ t("Salma Commercial Center, Jeddah") }}
        </p>
      </li>
      <li>
        <img src="@/assets/icons/icon3.png" />
        <p>
          {{ t("E-mail") }} <br />
          info@yourdomain.com
        </p>
      </li>
      <li>
        <img src="@/assets/icons/icon2.png" />
        <p>
          {{ t("phone") }} <br />
          00 ( 966 ) 595180519
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["t"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/sass/query.scss";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";
.detailes {
  width: 893px;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #00000029;
  border-radius: 4px;
  padding: 5px 10px 0px;
  margin: 50px auto;
  @include media-breakpoint-down(lg) {
    width: 100%;
    box-shadow: 0px 0px 0px;
    border: 0px;
  }
  h5 {
    font-family: "Bahij-Bold";
    font-size: 22px;
  }
  ul {
    padding: 0px;
    padding-top: 20px;
    margin-bottom: 10px;
    @include media-breakpoint-down(lg) {
      background: #f9f9f9;
    }
    li {
      display: inline-block;
      width: 33%;
      font-family: "Bahij-Bold";
      padding-right: 15px;
      text-align: center;
      @include media-breakpoint-down(lg) {
        width: 100%;
        margin-bottom: 10px;
      }
      img {
        display: inline-block;
        vertical-align: top;
        margin-top: 3px;
        margin-left: -22px;
        width: 20px;
        height: 20px;
      }
      p {
        display: inline-block;
        text-align: center;
        font-size: 18px;
        margin: 0px;
        padding: 0px;
        @include media-breakpoint-down(lg) {
          font-size: 15px;
        }
      }
      &:first-child {
        text-align: right;
        @include media-breakpoint-down(lg) {
          text-align: center;
        }
        img {
          margin-left: -35px;
          margin-top: 5px;
        }
      }
    }
  }
}
.anglish_version {
  .detailes {
    ul {
      li {
        padding-left: 15px;
        padding-right: 0px;
        &:first-child {
          text-align: left;
          @include media-breakpoint-down(lg) {
            text-align: center;
          }
        }
        img {
          margin-left: 0px;
          margin-right: -35px;
        }
      }
    }
  }
}
</style>
