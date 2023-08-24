<template>
  <div class="mobile-footer">
    <ul>
      <li><img class="style_img" src="@/assets/images/Main_logo.png" /></li>
      <li class="list_button">
        <img src="@/assets/images/Group1.png" />
        <img src="@/assets/images/Group2.png" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";
.mobile-footer {
  background: #19191b;
  color: white;
  display: none;
  @include media-breakpoint-down(lg) {
    display: block;
  }
  ul {
    padding: 20px 0px;
    margin: 0px;
    li {
      width: 45%;
      img {
        padding-bottom: 10px;
        display: block;
        margin: auto;
        object-fit: contain;
        width: 100px;
      }
      .style_img {
        height: 70px;
        width: 100%;
        object-fit: contain;
      }
      @include media-breakpoint-down(lg) {
        display: inline-block;
        text-align: right;
        vertical-align: middle;
        direction: rtl;
      }
    }
  }
}
</style>
