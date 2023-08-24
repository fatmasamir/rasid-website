<template>
  <teleport to="body">
    <div v-if="show" @click="tryClose" class="backdrop"></div>
    <transition name="dialog">
      <dialog open v-if="show">
        <header>
          <slot name="header">
            <h4>{{ title }}</h4>
          </slot>
        </header>
        <section>
          <slot></slot>
        </section>
        <menu v-if="!fixed" :class="{ errorstyle: error === true }">
          <slot name="actions">
            <button class="save-btn" @click="save" v-if="showSaveBtn">
              {{ t("save") }}
            </button>
            <button class="cancel-btn" type="button" @click="tryClose">
              {{ t("cancel") }}
            </button>
          </slot>
        </menu>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
import { useI18n } from "vue-i18n";
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    showSaveBtn: {
      type: Boolean,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    fixed: {
      type: Boolean,
      required: false,
      default: false,
    },
    error: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const { t } = useI18n();
    console.log(props.error);
    return {
      t,
    };
  },
  emits: ["close", "save"],
  methods: {
    tryClose() {
      if (this.fixed) {
        return;
      }
      this.$emit("close");
    },
    save() {
      this.$emit("save");
    },
  },
};
</script>

<style scoped lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  z-index: 10;
}

dialog {
  position: fixed;
  width: 417px;
  margin: auto;
  background: #ffffff;
  border-radius: 40px;
  z-index: 100;
  border: none;
  padding: 30px 25px;
  margin: 5rem auto;
  overflow: hidden;
  @include media-breakpoint-down(md) {
    width: 90%;
  }
}

header {
  h4 {
    color: #000000;
    font-family: "Bahij-Bold";
    font-size: 36px;
    text-align: center;
  }
}

menu {
  display: flex;
  justify-content: flex-end;
  margin: 71px auto 0;
  padding: 0;
}
.errorstyle {
  margin: 0px;
}

button {
  display: block;
  width: 165px;
  height: 56px;
  line-height: 56px;
  outline: none;
  border: none;
  position: relative;
  z-index: 2;
  overflow: hidden;
  font-size: 18px;
  text-align: center;
  color: #fff;
  text-decoration: none;
  background: #d11388;
  border-radius: 28px;
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

.cancel-btn {
  color: #fff;
  background: #e5e5e5;
  border-radius: 28px;
  border: 2px solid #e5e5e5;
  margin-right: 34px;

  &::after,
  &::before {
    background: #d11388 !important;
  }
  &:hover {
    color: #e5e5e5;
    border-color: #e5e5e5;
    &:before,
    &:after {
      top: 0;
    }
  }
}

@media (min-width: 768px) {
  dialog {
  }
}
.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
.dialog-enter-active {
  transition: all 0.3s ease-out;
}
.dialog-leave-active {
  transition: all 0.3s ease-in;
}
.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}
.anglish_version {
  .cancel-btn {
    margin-left: 34px;
    margin-right: 0;
  }
}
</style>
