<template>
  <div>
    <Form
      novalidate="novalidate"
      @submit="onSubmitContact"
      id="kt_Contact_form"
      ref="formRef"
      :validation-schema="validationScheema"
      v-slot="{ errors }"
    >
      <div class="mb-3">
        <Field
          type="text"
          class="form-control"
          id="identity"
          v-bind:placeholder="t('name')"
          name="the_name"
          :class="{ 'is-invalid': errors.the_name }"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="the_name" />
          </div>
        </div>
      </div>
      <div class="mb-3">
        <Field
          type="email"
          class="form-control"
          id="identity"
          v-bind:placeholder="t('E-mail')"
          name="Email"
          :class="{ 'is-invalid': errors.Email }"
        />

        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="Email" />
          </div>
        </div>
      </div>
      <div class="mb-3">
        <Field
          class="selectpicker"
          name="type_of_inquiry"
          as="select"
          :class="{ 'is-invalid': errors.type_of_inquiry }"
        >
          <option selected value="">{{ t("Inquiry") }}</option>
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
            <ErrorMessage name="type_of_inquiry" />
          </div>
        </div>
      </div>
      <div class="mb-3">
        <Field
          v-bind:placeholder="t('message')"
          name="the_message"
          as="textarea"
          :class="{ 'is-invalid': errors.the_message }"
        ></Field>
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="the_message" />
          </div>
        </div>
      </div>
      <div class="mb-3">
        <button type="submit" class="btn mb-3">{{ t("Send") }}</button>
      </div>
    </Form>
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

    let contact = ref(
      Yup.object().shape({
        the_name: Yup.string()
          .required(`${props.t("name")} ${props.t("required")}`)
          .label(""),
        Email: Yup.string()
          .required(`${props.t("E-mail")} ${props.t("required")}`)
          .label(""),
        type_of_inquiry: Yup.string()
          .required(`${props.t("Inquiry")} ${props.t("required")}`)
          .label(""),
        the_message: Yup.string()
          .required(`${props.t("message")} ${props.t("required")}`)
          .label(""),
      })
    );

    let validationScheema = computed(() => contact.value);

    watch(language, (newval, oldval) => {
      if (newval !== oldval) {
        validationScheema = computed(() => contact.value);
      }
    });
    const onSubmitContact = (values) => {
      // Activate indicator
      // Dummy delay
      setTimeout(() => {
        // Send login request
        console.log(values);
      }, 2000);
    };
    return {
      contact,
      onSubmitContact,
      validationScheema,
      formRef,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/sass/query.scss";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";
$bg-img: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
form {
  width: 893px;
  margin: auto;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #00000029;
  border-radius: 4px;
  padding: 48px;
  margin-top: 19px;
  @include media-breakpoint-down(lg) {
    width: 100%;
    border: 0px;
    padding: 24px;
    box-shadow: 0px 0px 0px;
  }
  input,
  textarea,
  select {
    width: 100%;
    background: #f9f9f9 0% 0% no-repeat padding-box;
    border-radius: 3px;
    border: 0px;
    height: 55px;
    padding: 10px;
    font-family: "Bahij-Bold";
    font-size: 18px;
    color: black;
    &::placeholder {
      color: black;
    }
    &:focus-visible {
      outline: none;
      border: 0px;
    }
    &:focus {
      box-shadow: 0px 0px 0px;

      border: 1px solid #aaa;
    }
    &:hover {
      box-shadow: 0px 0px 7px #d1138899;
    }
  }
  select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background: $bg-img 2% center no-repeat #f9f9f9;
  }
  textarea {
    height: 140px;
  }
  .btn {
    background: #d11388 0% 0% no-repeat padding-box;
    border-radius: 9px;
    color: white;
    float: left;
    width: 110px;
    height: 37px;
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
    &:focus {
      box-shadow: 0px 0px 0px;
      border: 1px solid #ff000052;
    }
    &::placeholder {
      color: transparent;
    }
  }
}
.anglish_version {
  form {
    .btn {
      float: right;
    }
    select {
      background: $bg-img 98% center no-repeat #f9f9f9;
    }
  }
}
</style>
