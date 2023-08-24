<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="[mode, background]">
    <slot> </slot>
  </router-link>
</template>
<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: "flat",
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
    background: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
a.flat,
button {
  height: 64px;
  line-height: 64px;
  outline: none;
  border: none;
  position: relative;
  z-index: 2;
  overflow: hidden;
  font-size: 16px;
  text-align: center;
  color: #fff;
  font-family: "Bahij-Bold";
  text-decoration: none;
  background: #d11388;
  border-radius: 9px;
  border: 2px solid #d11388;
  -webkit-transition: all 0.35s;
  -moz-transition: all 0.35s;
  -o-transition: all 0.35s;
  transition: all 0.35s;
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
.white-background {
  background: #fff !important;
  color: #000000 !important;
  border: 2px solid #fff !important;
  &::after,
  &::before {
    background: #d11388 !important;
  }
  &:hover {
    color: #fff !important;
    border-color: #fff !important;
  }
}
a {
  display: inline-block;
  color: #882887;
  text-decoration: none;
}

.flat {
  width: 260px;
}

a.outline,
button.outline {
  height: 62px;
  font-family: "Bahij-Bold";
  font-size: 20px;
  position: relative;
  z-index: 2;
  overflow: hidden;
  line-height: 62px;
  color: #fff;
  text-align: center;
  background: transparent;
  width: 257px;
  border: 2px solid #ffffff;
  -webkit-transition: all 0.35s;
  -moz-transition: all 0.35s;
  -o-transition: all 0.35s;
  transition: all 0.35s;
  border-radius: 9px;
  &::after,
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: -100%;
    left: 0;
    background: #d11388;

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
    color: #fff;
    border-color: #d11388;
    &:before,
    &:after {
      top: 0;
    }
  }
}
</style>
