<template>
  <div class="bodyLogin">
    <div class="container">
      <h2>{{ t("new_signup") }}</h2>
      <p>{{ t("choose_type_member") }}</p>
      <Form
        class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
        novalidate="novalidate"
        @submit="onSubmitRegister"
        id="kt_login_signup_form"
        ref="formRef"
        :validation-schema="validationScheema"
        v-slot="{ errors }"
      >
        <div class="mb-3">
          <label for="identity" class="form-label file_required">
            {{ t("new_type_of_account") }}</label
          >
          <Field
            class="form-control"
            name="type_of_account"
            as="select"
            @change="accountTypeChange"
            :class="{ 'is-invalid': errors.type_of_account }"
          >
            <option value="">Select value</option>
            <option value="famouses">{{ t("famouses") }}</option>
            <option value="freelance_documents">
              {{ t("freelance_documents") }}
            </option>
            <option value="commercial_quarrels">
              {{ t("commercial_quarrels") }}
            </option>
          </Field>

          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="type_of_account" />
            </div>
          </div>
        </div>
        <div class="mb-3" v-if="showRecordNumber">
          <label for="identity" class="form-label file_required">
            {{ t("new_record_number") }}</label
          >
          <Field
            class="form-control"
            type="number"
            placeholder=""
            name="record_number"
            autocomplete="off"
            :class="{ 'is-invalid': errors.record_number }"
          />
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="record_number" />
            </div>
          </div>
        </div>
        <div class="mb-3" v-else>
          <label for="identity" class="form-label file_required">
            {{ t("id_number") }}</label
          >
          <Field
            class="form-control"
            type="number"
            placeholder=""
            name="id_number"
            autocomplete="off"
            :class="{ 'is-invalid': errors.id_number }"
          />
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="id_number" />
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="identity" class="form-label file_required">
            {{ t("new_tax_number") }}</label
          >
          <Field
            class="form-control"
            type="number"
            placeholder=""
            name="new_tax_number"
            autocomplete="off"
            :class="{ 'is-invalid': errors.new_tax_number }"
          />
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="new_tax_number" />
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="identity" class="form-label file_required">
            {{ t("new_bank_name") }}</label
          >
          <Field
            class="form-control"
            type="text"
            placeholder=""
            name="new_bank_name"
            autocomplete="off"
            :class="{ 'is-invalid': errors.new_bank_name }"
          />
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="new_bank_name" />
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="identity" class="form-label file_required">
            {{ t("new_Iban_num") }}</label
          >
          <Field
            class="form-control"
            type="text"
            placeholder=""
            name="new_Iban_num"
            autocomplete="off"
            :class="{ 'is-invalid': errors.new_Iban_num }"
          />
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="new_Iban_num" />
            </div>
          </div>
        </div>

        <!--begin::Input group-->

        <div class="mb-3">
          <input type="checkbox" class="form-control" id="remember" />
          <label for="remember" class="form-label checkboxLabel">{{
            t("remember")
          }}</label>
          <div class="">
            <input type="checkbox" class="form-control" id="terns_conditions" />
            <label for="terns_conditions" class="form-label checkboxLabel">{{
              t("accept_term_consdi")
            }}</label>
          </div>
        </div>
        <!--end::Input group-->

        <!--begin::Actions-->
        <div class="mb-3">
          <button type="submit" class="btn mb-3">{{ t("signup") }}</button>
        </div>
        <!--end::Actions-->
      </Form>
    </div>
  </div>
</template>

<script>
import { ErrorMessage, Field, Form } from "vee-validate";
import { useStore } from "vuex";
import * as Yup from "yup";
import { computed, ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  props: ["t"],
  setup(props) {
    const store = useStore();
    const formRef = ref(null);
    const showRecordNumber = ref(true);
    const type_of_account = ref(null);
    let checkTypeAccount = ref(null);
    const validSelect = ref(true);
    console.log(type_of_account, "type_of_account");

    const language = computed(() => store.getters.language);
    let registration = ref(
      Yup.object().shape({
        type_of_account: Yup.string()
          .required(`${props.t("new_type_of_account")} ${props.t("required")}`)
          .label(""),
        record_number: Yup.string()
          .required(`${props.t("new_record_number")} ${props.t("required")}`)
          .label(""),
        id_number: Yup.string()
          .required(`${props.t("id_number")} ${props.t("required")}`)
          .label(""),
        new_tax_number: Yup.string()
          .required(`${props.t("new_tax_number")} ${props.t("required")}`)
          .label(""),
        new_bank_name: Yup.string()
          .required(`${props.t("new_bank_name")} ${props.t("required")}`)
          .label(""),
        new_Iban_num: Yup.string()
          .required(`${props.t("new_Iban_num")} ${props.t("required")}`)
          .label(""),
      })
    );
    let validationScheema = computed(() => registration.value);
    const accountTypeChange = (e) => {
      console.log(e.target.value);
      validSelect.value = true;
      checkTypeAccount = e.target.value;
      if (e.target.value === "") {
        validSelect.value = false;
      }
      if (e.target.value !== "commercial_quarrels") {
        showRecordNumber.value = false;
      } else {
        showRecordNumber.value = true;
      }
    };
    watch(language, (newval, oldval) => {
      if (newval !== oldval) {
        validationScheema = computed(() => registration.value);
      }
    });

    const onSubmitRegister = (values) => {
      // Activate indicator
      console.log(values, "lllllllllll");

      // Dummy delay
      setTimeout(() => {
        // Send login request
        console.log(values);
      }, 2000);
    };
    return {
      registration,
      onSubmitRegister,
      validationScheema,
      formRef,
      type_of_account,
      accountTypeChange,
      showRecordNumber,
      validSelect,
      checkTypeAccount,
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
          width: 100%;
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
      /* Chrome, Safari, Edge, Opera */
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      input[type="number"] {
        -moz-appearance: textfield;
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
        font-size: 16px;
        font-family: "Bahij-regular";
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
      height: 55px;
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
  .fv-plugins-message-container {
    .fv-help-block {
      span {
        color: #f56c6c;
        font-size: 12px;
      }
    }
  }
  select {
    height: 55px;
    background: #f9f9f9;
    border: none;
    position: relative;
    &:focus,
    &:hover {
      outline: none;

      box-shadow: 0px 0px 7px #d1138899;
      option {
        color: black;
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
