<template>
  <div class="end-footer">
    <hr />
    <div class="container">
      <p>© 2021 Rased, All Rights Reserved</p>
      <ul>
        <li>
          <a href="#"><img src="@/assets/icons/instagram.png" /></a>
        </li>
        <li>
          <a href="#"><img src="@/assets/icons/twitter.png" /></a>
        </li>
        <li>
          <a href="#"><img src="@/assets/icons/facebook.png" /></a>
        </li>
      </ul>
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
.end-footer {
  background: #19191b;
  direction: ltr;
  hr {
    background: #2a2a2d;
    margin: 0px;
    margin-bottom: 10px;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      width: auto;
      margin: 0px;
      @include media-breakpoint-down(lg) {
        font-size: 15px;
      }
    }
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        padding-right: 20px;
      }
    }
  }
}
</style>
