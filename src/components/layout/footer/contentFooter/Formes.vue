<template>
  <div class="formes">
    <h1>{{ t("start") }}</h1>
    <p>
      {{ t("rasid_pragraph") }}
    </p>
    <form>
      <div class="input-container">
        <input type="text" :placeholder="$t('E-mail')" />
      </div>
      <button>
        {{ t("start") }}
      </button>
    </form>
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
.formes {
  h1 {
    margin-bottom: 15px;
    font-style: normal !important;
    font-weight: bold !important;
  }
  h4 {
    font-size: 18px;
  }
  p {
    margin: auto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 33px;
    width: 575px;
    margin-bottom: 32px;
    opacity: 0.9;
    @include media-breakpoint-down(lg) {
      width: auto;
    }
  }
  form {
    padding: 0px 0px 100px;
    display: flex;
    width: 100%;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    @include media-breakpoint-down(lg) {
      padding: 50px 0px;
    }
    .input-container {
      margin-left: 12px;
      input {
        width: 392px;
        height: 57px;
        background: #fff;
        border-radius: 8px;
        text-align: right;
        padding: 10px;
        border: 0px;
        &:focus-visible {
          outline: 0px;
        }
      }
    }

    button {
      width: 125px;
      height: 57px;
      background: #d11388;
      border-radius: 8px;
      outline: none;
      box-shadow: none;
      border: none;
      overflow: hidden;
      color: #fff;
      font-size: 15px;
      font-family: "Bahij-Bold";
      border: 2px solid #d11388;
      -webkit-transition: all 0.35s;
      -moz-transition: all 0.35s;
      -o-transition: all 0.35s;
      transition: all 0.35s;
      position: relative;
      display: block;
      z-index: 2;
      &::after,
      &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: -100%;
        left: 0;
        bottom: 100%;
        background: #fff;
        z-index: -1;
        transition: all 0.35s;
      }
      &::before {
        opacity: 0.5;
      }
      &::after {
        transition-delay: 0.2s;
      }
      &:hover {
        color: #d11388;
        border-color: #d11388;

        &:before,
        &:after {
          top: 0;
        }
      }
    }
  }
  @include media-breakpoint-down(lg) {
    display: none;
  }
}
.anglish_version {
  .formes {
    form {
      .input-container {
        margin-right: 12px;
        margin-left: 0;
        input {
          text-align: left;
        }
      }
    }
  }
}
</style>
