<template>
  <section class="header-about">
    <navbar background="white-background"></navbar>
    <div class="content-header">
      <h1>{{ t(header) }}</h1>
      <ul>
        <li>
          <router-link to="/"
            ><p>{{ t("home") }}</p></router-link
          >
        </li>
        <li>/</li>
        <li>
          <a href="#"
            ><p>{{ t(header) }}</p></a
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: ["t", "header"],
};
</script>
<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";
@import "@/assets/style/sass/query.scss";
.header-about {
  position: relative;
  background: url(../../../assets/images/Vector.png) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 443px;
  padding-top: 56.07px;
  @include media-breakpoint-between(md, xl) {
    height: 340px;
  }
  @include media-breakpoint-down(md) {
    background: none;
    height: auto;
  }
  @include media-breakpoint-down(md) {
    padding-top: 0;
  }
  .img_header {
    width: 100%;
    height: 100%;
  }
  .content-header {
    position: absolute;
    top: 213px;
    right: 0px;
    width: 100%;
    direction: rtl;
    padding-right: 92px;
    @include landscape_tablets {
      top: 160px;
    }
    @include media-breakpoint-down(md) {
      display: none;
    }
    h1 {
      font-family: "Bahij-Bold" !important;
      margin-bottom: 10px;
      font-style: normal;
      font-size: 45px;
      line-height: 57px;
      text-align: right;
      color: #ffffff;
      font-style: normal !important;
      font-weight: bold !important;
    }
    ul {
      padding: 0px;
      list-style: none;
      li {
        display: inline-block;
        color: #ffffff;
        padding: 0px 3px;
        a {
          color: #ffffff;
          text-decoration: none;
          p {
            font-size: 24px;
            opacity: 0.9;
          }
        }
      }
    }
    @include media-breakpoint-down(md) {
      display: none;
    }
  }
}
.anglish_version {
  display: block;
  .header-about {
    background: url(../../../assets/images/vector_en.png) no-repeat center
      center;
    @include media-breakpoint-down(md) {
      background: none;
      height: auto;
    }
    .content-header {
      padding-right: 0px;
      padding-left: 78px;
      h1,
      ul {
        text-align: left;
        direction: ltr;
      }
    }
  }
}
</style>
