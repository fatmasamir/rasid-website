<template>
  <div class="row">
    <div class="col-md-6" v-for="feature in features" :key="feature.title">
      <div class="card">
        <div class="icon" :class="feature['classname']">
          <img :src="feature['icon']" />
        </div>
        <div class="contents">
          <h4>{{ feature.title }}</h4>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["features"],
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";
@import "@/assets/style/sass/query.scss";
.card {
  width: 256px;
  height: 300px;
  background: #ffffff;
  text-align: center;
  margin-bottom: 44.04px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 23.85px;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 12px;
  @include landscape_tablets {
    width: 100%;
    height: auto;
    min-height: 298.66px;
    padding: 20.77px 20.77px;
  }
  @include media-breakpoint-down(md) {
    width: 100%;
    margin-bottom: 22px;
    &:first-of-type {
      margin-top: 0px;
    }
  }
  .icon {
    width: 77.64px;
    height: 77.64px;
    line-height: 77.64px;

    border-radius: 50%;
    @include media-breakpoint-down(md) {
      width: 65px;
      height: 65px;
      line-height: 65px;
    }
  }
  .shopping {
    background: #feeceb;
  }
  .cheque {
    background: #fffbee;
  }
  .gift {
    background: #eeeefb;
  }
  .lock {
    background: #ecebef;
  }
  .contents {
    margin-top: 33.84px;
    color: #000000;
    @include media-breakpoint-down(md) {
      margin-top: 16px;
    }
    h4 {
      font-size: 22px;
      line-height: 17px;
      font-family: "Bahij-Bold";
      margin-bottom: 12px;
    }
    p {
      font-size: 14px;
      line-height: 19px;
    }
  }
}
</style>