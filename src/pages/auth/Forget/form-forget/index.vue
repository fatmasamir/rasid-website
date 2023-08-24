<template>
  <div class="bodyLogin">
    <div class="container">
      <h2>{{ t("Forget") }}</h2>
      <p>{{ t("message_forget") }}</p>
      <Form
        class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
        novalidate="novalidate"
        @submit="onSubmitForget"
        id="kt_forget_form"
        ref="formRef"
        :validation-schema="validationScheema"
        v-slot="{ errors }"
      >
        <div class="mb-3">
          <label for="email" class="form-label file_required" required>
            {{ t("E-mail") }}</label
          >
          <Field
            class="form-control"
            type="email"
            placeholder=""
            name="Email"
            autocomplete="off"
            id="email"
            :class="{ 'is-invalid': errors.Email }"
          />
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="Email" />
            </div>
          </div>
        </div>
        <div class="mb-3">
          <button type="submit" class="btn mb-3">{{ t("Send") }}</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import { ErrorMessage, Field, Form } from "vee-validate";
import { useStore } from "vuex";
import * as Yup from "yup";
import { watch } from "@vue/runtime-core";
import { computed, ref } from "@vue/reactivity";
export default {
  props: ["t"],
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup(props) {
    const store = useStore();
    const formRef = ref(null);
    const language = computed(() => store.getters.language);
    let forget = ref(
      Yup.object().shape({
        Email: Yup.string()
          .email(`${props.t("invalid_email")}`)
          .required(`${props.t("E-mail")} ${props.t("required")}`)
          .label(""),
      })
    );

    let validationScheema = computed(() => forget.value);
    watch(language, (newval, oldval) => {
      if (newval !== oldval) {
        validationScheema = computed(() => forget.value);
      }
    });
    const onSubmitForget = (values) => {
      // Activate indicator
      console.log(values, "lllllllllll");

      // Dummy delay
      setTimeout(() => {
        // Send login request
        console.log(values);
      }, 2000);
    };
    return {
      forget,
      onSubmitForget,
      validationScheema,
      formRef,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";
.bodyLogin {
  width: 100%;
  text-align: center;
  margin-top: 100px;
  @include media-breakpoint-down(lg) {
    margin-top: 98px;
  }
  @include media-breakpoint-down(md) {
    margin-top: 30px;
  }
  .container {
    width: 671px;
    @include media-breakpoint-down(md) {
      width: 90%;
    }
    margin: auto;
    h2 {
      font-size: 40px;
      line-height: 64px;
      margin-bottom: 10px;
      font-family: "Bahij-Bold";
      @include media-breakpoint-down(md) {
        font-size: 36px;
      }
    }
    P {
      color: #707070;
      width: 310px;
      margin: auto;
      padding-bottom: 20px;
      @include media-breakpoint-down(md) {
        color: #707070;
        width: 95%;
        margin: auto;
        font-size: 15px;
      }
    }
    form {
      text-align: center;
      div {
        text-align: right;
        width: 529px;
        @include media-breakpoint-down(md) {
          width: 90%;
        }
        margin: auto;
        margin-bottom: 27px !important;
        a {
          text-decoration: none;
        }
        .left_link {
          float: left;
          text-align: center;
          font: normal normal normal 16px/38px;
          letter-spacing: 0px;
          color: #707070;
          opacity: 1;
          font-weight: 100;
        }
      }
      label {
        font-family: "Bahij-Bold";
        @include media-breakpoint-down(md) {
          font-size: 15px;
        }
      }
      input {
        background: #f9f9f9;
        height: 55px;
        border: 0px;
        border-radius: 3px;
        &::focus-visible {
          outline: none;
        }
        &:focus {
          box-shadow: 0px 0px 0px;
        }
        &:hover {
          box-shadow: 0px 0px 7px #d1138899;
        }
      }
      .file_required::after {
        content: " * ";
      }
      input[type="checkbox"] {
        height: 13px;
        width: auto;
        display: inline-block;
        margin-left: 5px;
        padding-top: 8px;
        background: white;
        border-color: black;
        border-radius: 3px;
        -webkit-appearance: checkbox;
        appearance: checkbox;
      }
      .checkboxLabel {
        color: #707070;
        font-weight: 100;
        vertical-align: text-top;
      }
      .SignUp {
        font: normal normal normal 16px/38px;
        letter-spacing: 0px;
        color: #707070;
        a {
          font: normal normal normal 16px/38px;
          color: #d11388;
          font-weight: bold;
        }
      }

      .fv-plugins-message-container {
        .fv-help-block {
          span {
            color: #f56c6c;
            font-size: 12px;
          }
        }
      }

      .is-invalid {
        color: red;
        border: 1px solid #ff000052;
        padding: 10px;
      }
    }
    button {
      border-radius: 8px;
      outline: none;
      box-shadow: none;
      border: none;
      overflow: hidden;
      color: #fff;
      font-family: "Bahij-Bold";
      border: 2px solid #d11388;
      -webkit-transition: all 0.35s;
      -moz-transition: all 0.35s;
      -o-transition: all 0.35s;
      transition: all 0.35s;
      position: relative;
      display: block;
      z-index: 2;
      background: #d11388 0% 0% no-repeat padding-box;
      border-radius: 9px;
      opacity: 1;
      color: white;
      width: 165px;
      height: 64px;
      font-size: 20px;
      line-height: 38px;
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
      @include media-breakpoint-down(md) {
        width: 100%;
        font-size: 18px;
      }
    }
  }
}

.anglish_version {
  .bodyLogin {
    .container {
      form {
        input[type="checkbox"] {
          margin-right: 5px;
          margin-left: 0px;
        }
        div {
          text-align: left;
          .left_link {
            float: right;
          }
        }
      }
    }
  }
}
</style>
