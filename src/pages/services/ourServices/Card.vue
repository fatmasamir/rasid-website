<template>
  <div class="row">
    <div
      class="col-md-6 card-container"
      v-for="service in data"
      :key="service.id"
    >
      <div class="service-card">
        <div class="icon">
          <img :src="service['icon']" :class="`service-${service.id}`" />
        </div>
        <div class="contents">
          <h4>{{ service.title }}</h4>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";
.card-container {
  margin-bottom: 60px;
  @include media-breakpoint-down(md) {
    margin-bottom: 30px;
  }
  &:last-of-type,
  &:nth-of-type(5) {
    margin-bottom: 0;
  }
  &:last-of-type {
    @include media-breakpoint-down(md) {
      margin-bottom: 0px;
    }
  }
  &:nth-of-type(5) {
    @include media-breakpoint-down(md) {
      margin-bottom: 30px;
    }
  }
}
.service-card {
  border: 1px solid #707070;
  padding: 15px;
  display: flex;
  height: 100px;

  @include media-breakpoint-down(md) {
    height: 115px;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 10px;
    border: none;
  }
  .icon {
    .service-1 {
      width: 62px;
      height: 69px;
    }
    .service-2 {
      width: 60px;
      height: 65px;
    }
    .service-3 {
      width: 62px;
      height: 57px;
    }
    .service-4 {
      width: 69px;
      height: 69px;
    }
    .service-5 {
      width: 55px;
      height: 55px;
    }
    .service-6 {
      width: 69px;
      height: 71px;
    }
  }
  .contents {
    color: #070707;
    margin-right: 17px;
    h4 {
      font-size: 22px;
      font-family: "Bahij-Bold";
      margin-bottom: 0;
    }
    P {
      font-size: 14px;
      margin: 0;
      line-height: 20px;
    }
  }
}
.anglish_version {
  .service-card {
    .contents {
      color: #070707;
      margin-right: 0;
      margin-left: 17px;
    }
  }
}
</style>