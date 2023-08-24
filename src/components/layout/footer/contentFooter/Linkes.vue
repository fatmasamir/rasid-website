<template>
  <div class="list">
    <hr />
    <div class="row justify-content-start">
      <div class="col-md-3 col-sm-6 img_div">
        <img src="@/assets/images/logo_white.png" />
      </div>
      <div class="col-md-3 col-sm-6">
        <ul>
          <li>
            <h4>{{ t("Site Map") }}</h4>
          </li>
          <li>
            <router-link to="/" tag="a">
              <p>{{ t("home") }}</p>
            </router-link>
          </li>
          <li>
            <router-link to="/about-us" tag="a">
              <p>{{ t("About us") }}</p>
            </router-link>
          </li>
          <li>
            <router-link to="/" tag="a">
              <p>{{ t("Points of Sale") }}</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col-md-3 col-sm-6">
        <ul>
          <li>
            <h4>{{ t("Additional links") }}</h4>
          </li>
          <li>
            <p>{{ t("Points of Sale") }}</p>
          </li>
          <li>
            <p>{{ t("Online Payment") }}</p>
          </li>
          <li>
            <p>{{ t("Customer Care") }}</p>
          </li>
        </ul>
      </div>
      <div class="col-md-3 col-sm-6">
        <ul>
          <li>
            <h4>{{ t("Connect us") }}</h4>
          </li>
          <li>
            <img src="@/assets/icons/icon1.png" />
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
    </div>
  </div>
</template>

<script>
export default {
  props: ["t"],
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";
.list {
  direction: rtl;
  hr {
    background: #2a2a2d;
    margin: 0px;
    margin-bottom: 55px;
  }
  .justify-content-start {
    width: 100%;

    > div {
      text-align: right;

      ul {
        li {
          padding-bottom: 32px;
          display: flex;
          direction: rtl;
          @include media-breakpoint-down(lg) {
            padding-bottom: 15px;
            text-align: right;
            width: 100%;
            display: block;
          }

          a {
            width: 100%;
            text-align: right;

            @include media-breakpoint-down(lg) {
              text-align: right;
            }
          }

          h4 {
            font-family: "Bahij-Bold";
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            /* or 239% */
            display: flex;
            align-items: center;
            text-align: right;
            margin-bottom: 0px;
            color: #ffffff;
          }

          img {
            display: inline-block;
            width: 23px;
            height: 25px;
            object-fit: contain;
            margin-top: 3px;
          }

          p {
            display: inline-block;
            font-style: normal;
            font-weight: normal;
            font-size: 15.0938px;
            padding-bottom: 0px;
            margin-bottom: 0px;
            text-align: right;
            color: #707070;
            @include media-breakpoint-down(lg) {
              text-align: right;
            }
          }
        }
      }

      @include media-breakpoint-down(lg) {
        display: none;
      }
    }

    .img_div {
      text-align: center;
      margin-bottom: 50px;

      img {
        padding-right: 10px;
      }
    }
  }
}

.anglish_version {
  .list {
    .justify-content-start {
      direction: ltr;

      > div {
        ul {
          text-align: left;

          li {
            direction: ltr;
            a {
              text-align: left;
            }
            p {
              text-align: left;
            }
          }
        }
      }
    }
  }
}
</style>
