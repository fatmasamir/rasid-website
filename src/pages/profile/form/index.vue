<template>
  <form @submit.prevent="onSubmit">
    <div class="profile-header">
      <image-cropper :editable="edit"></image-cropper>
      <div class="edit-container">
        <button type="button" @click="editForm">{{ t("edit") }}</button>
      </div>
    </div>
    <div class="divider"></div>
    <div class="personal-data">
      <h4>
        {{ t("personal_data") }}
      </h4>
      <div class="inputs-container">
        <div class="row">
          <div class="col-md-6">
            <div class="input-container">
              <label>{{ t("first_name") }}</label>
              <div class="custom-input">
                <input type="text" :disabled="!edit" v-model="first_name" />
                <span class="input-icon" v-if="edit"
                  ><img src="../../../assets/icons/in-edit.png"
                /></span>
              </div>
              <span class="input-error-message">{{ firstNameError }}</span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-container">
              <label>{{ t("last_name") }}</label>
              <div class="custom-input">
                <input type="text" :disabled="!edit" v-model="last_name" />
                <span class="input-icon" v-if="edit"
                  ><img src="../../../assets/icons/in-edit.png"
                /></span>
              </div>
              <span class="input-error-message">{{ LastNameError }}</span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-container">
              <label>{{ t("record_number") }}</label>
              <div class="custom-input">
                <input type="text" :disabled="!edit" v-model="record_number" />
                <span class="input-icon" v-if="edit"
                  ><img src="../../../assets/icons/in-edit.png"
                /></span>
              </div>
              <span class="input-error-message">{{ recordNumberError }}</span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-container">
              <label>{{ t("tax_number") }}</label>
              <div class="custom-input">
                <input type="text" :disabled="!edit" v-model="tax_number" />
                <span class="input-icon" v-if="edit"
                  ><img src="../../../assets/icons/in-edit.png"
                /></span>
              </div>
              <span class="input-error-message">{{ taxNumberError }}</span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-container">
              <label>{{ t("bank_name") }}</label>
              <div class="custom-input">
                <input type="text" :disabled="!edit" v-model="bank_name" />
                <span class="input-icon" v-if="edit"
                  ><img src="../../../assets/icons/in-edit.png"
                /></span>
              </div>
              <span class="input-error-message">{{ bankNameMessage }}</span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-container">
              <label>{{ t("IBAN_number") }}</label>
              <div class="custom-input">
                <input type="text" :disabled="!edit" v-model="IBAN_number" />
                <span class="input-icon" v-if="edit"
                  ><img src="../../../assets/icons/in-edit.png"
                /></span>
              </div>
              <span class="input-error-message">{{ IBANNumberMessage }}</span>
            </div>
          </div>
        </div>
        <h4>
          {{ t("safety") }}
        </h4>
        <div class="row">
          <div class="col-md-6">
            <div class="input-container">
              <label>{{ t("email") }}</label>
              <div class="custom-input">
                <input type="text" :disabled="!edit" v-model="email" />
                <span class="input-icon" v-if="edit"
                  ><img src="../../../assets/icons/in-edit.png"
                /></span>
              </div>
              <span class="input-error-message">{{ emailErrorMessage }}</span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-container">
              <label>{{ t("phone_number") }}</label>
              <div class="custom-input">
                <input type="text" :disabled="!edit" v-model="phone_number" />
                <span class="input-icon" v-if="edit"
                  ><img src="../../../assets/icons/in-edit.png"
                /></span>
              </div>
              <span class="input-error-message">{{ phoneNumberError }}</span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-container">
              <label>{{ t("current_password") }}</label>
              <div class="custom-input">
                <input type="text" :disabled="!edit" v-model="current_password" />
                <span class="input-icon" v-if="edit"
                  ><img src="../../../assets/icons/in-edit.png"
                /></span>
              </div>
              <span class="input-error-message">{{ passwordErrorMessage }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="form-actions" :style="{ display: !edit ? 'none' : 'flex' }">
      <button class="save-btn">{{ t("save") }}</button>
      <button class="cancel-btn" type="button" @click="cancelEdit">
        {{ t("cancel") }}
      </button>
    </div>
  </form>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useI18n } from "vue-i18n";
import ImageCropper from "./ImageCropper.vue";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
export default {
  components: { ImageCropper },
  setup() {
    const { t } = useI18n();
    const { handleSubmit } = useForm();
    const edit = ref(false);
    const editForm = () => {
      edit.value = true;
    };
    const cancelEdit = () => {
      edit.value = false;
    };
    // let formValues = ref({
    //   first_name: "",
    //   last_name: "",
    // });
    function isRequired(value, fieldName) {
      console.log(value, fieldName);

      if (fieldName.value && fieldName.value.trim()) {
        return true;
      } else if (fieldName.field === "first_name" && !fieldName.value) {
        const message = computed(() => `${t("first_name_validate")} ${t("required")}`);

        return message.value;
      } else if (fieldName.field === "last_name" && !fieldName.value) {
        const message = computed(() => `${t("last_name_validate")} ${t("required")}`);

        return message.value;
      }
      return "This is required";
    }
    function isNotNumber(value, fieldName) {
      // eslint-disable-next-line no-debugger
      debugger;
      if (fieldName.value && fieldName.value.trim() && !isNaN(fieldName.value.trim())) {
        return true;
      } else if (fieldName.field === "record_number" && !fieldName.value) {
        const message = computed(() => `${t("record_number_validate")} ${t("required")}`);

        return message.value;
      } else if (fieldName.field === "record_number" && isNaN(fieldName.value)) {
        const message = computed(
          () => `${t("record_number_validate")} ${t("must_Number")}`
        );
        return message.value;
      } else if (fieldName.field === "tax_number" && !fieldName.value) {
        const message = computed(() => `${t("tax_number_validate")} ${t("required")}`);

        return message.value;
      } else if (fieldName.field === "tax_number" && isNaN(fieldName.value)) {
        const message = computed(() => `${t("tax_number_validate")} ${t("must_Number")}`);
        return message.value;
      } else if (fieldName.field === "phone_number" && !fieldName.value) {
        const message = computed(() => `${t("phone_number_validate")} ${t("required")}`);

        return message.value;
      } else if (fieldName.field === "phone_number" && isNaN(fieldName.value)) {
        const message = computed(
          () => `${t("phone_number_validate")} ${t("must_Number")}`
        );
        return message.value;
      }
    }
    const { value: first_name, errorMessage: firstNameError } = useField(
      "first_name",
      isRequired
    );
    const { value: last_name, errorMessage: LastNameError } = useField(
      "last_name",
      isRequired
    );
    const { value: record_number, errorMessage: recordNumberError } = useField(
      "record_number",
      isNotNumber
    );
    const { value: tax_number, errorMessage: taxNumberError } = useField(
      "tax_number",
      isNotNumber
    );
    const { value: bank_name, errorMessage: bankNameMessage } = useField(
      "bank_name",
      yup.string().required(`${t("new_bank_name")} ${t("required")}`)
    );
    const { value: IBAN_number, errorMessage: IBANNumberMessage } = useField(
      "IBAN_number",
      yup.string().required(`${t("new_Iban_num")} ${t("required")}`)
    );
    const { value: email, errorMessage: emailErrorMessage } = useField(
      "email",
      yup
        .string()
        .email(t("invalid_email"))
        .required(`${t("new_email")} ${t("required")}`)
    );
    const { value: current_password, errorMessage: passwordErrorMessage } = useField(
      "current_password",
      yup.string().required(`${t("current_password_validate")} ${t("required")}`)
    );
    const { value: phone_number, errorMessage: phoneNumberError } = useField(
      "phone_number",
      isNotNumber
    );

    const onSubmit = handleSubmit((values) => {
      console.log(values, "values");
    });

    return {
      t,
      edit,
      editForm,
      cancelEdit,
      onSubmit,
      first_name,
      last_name,
      firstNameError,
      LastNameError,
      record_number,
      recordNumberError,
      tax_number,
      taxNumberError,
      bank_name,
      bankNameMessage,
      IBAN_number,
      IBANNumberMessage,
      email,
      emailErrorMessage,
      phone_number,
      phoneNumberError,
      current_password,
      passwordErrorMessage,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";
form {
  .profile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include media-breakpoint-down(md) {
      justify-content: normal;
    }
    .edit-container {
      @include media-breakpoint-down(md) {
        margin-right: 20px;
      }
      button {
        width: 140px;
        height: 45px;
        background: #d11388 0% 0% no-repeat padding-box;
        border-radius: 8px;
        border: none;
        font-size: 18px;
        color: #fff;

        @include media-breakpoint-down(md) {
          width: 114px;
          height: 28px;
          font-size: 15px;
        }
      }
    }
  }
  .divider {
    background: #eeeeee;
    height: 2px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .personal-data {
    h4 {
      color: #000000;
      font-size: 36px;
      font-family: "Bahij-Bold";
      margin-bottom: 36px;
      @include media-breakpoint-down(md) {
        text-align: center;
        margin-bottom: 25px;
      }
      &:last-of-type {
        margin-top: 16px;
        @include media-breakpoint-down(md) {
          margin-top: 5px;
        }
      }
    }
    .inputs-container {
      .input-container {
        margin-bottom: 20px;
        label {
          font-size: 15px;
          color: #d11388;
        }
        .custom-input {
          width: 438px;
          position: relative;
          @include media-breakpoint-down(xl) {
            width: 100%;
          }
          input {
            height: 55px;
            background: #fff 0% 0% no-repeat padding-box;
            border-radius: 8px;
            padding: 0;
            outline: none !important;
            text-indent: 15px;
            width: 100%;
            border: 0;
            @include media-breakpoint-down(md) {
              background: #afafaf;
              color: #fff;
            }
            &::focus-visible {
              outline: none;
            }
            &:focus {
              box-shadow: 0px 0px 0px;
            }
            &:hover {
              box-shadow: 0px 0px 7px #d1138899;
            }
            &:disabled {
              background: #eeeeee 0% 0% no-repeat padding-box;
            }
          }
          .input-icon {
            position: absolute;
            left: 28px;
            top: 50%;
            cursor: pointer;
            -webkit-transform: translateY(-50%);
            -moz-transform: translateY(-50%);
            -o-transform: translateY(-50%);
            transform: translateY(-50%);
          }
        }
      }
    }
  }
  .form-actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 43px;
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
      color: #000000;
      background: #fff;
      border-radius: 28px;
      border: 2px solid #fff;
      margin-right: 34px;
      @include media-breakpoint-down(md) {
        background: #afafaf;
        color: #fff;
        margin-right: 8px;
      }
      &::after,
      &::before {
        background: #d11388 !important;
      }
      &:hover {
        color: #fff;
        border-color: #fff;
        &:before,
        &:after {
          top: 0;
        }
      }
    }
  }
}
.anglish_version {
  form {
    .edit-container {
      @include media-breakpoint-down(md) {
        margin-right: 0;
        margin-left: 20px;
      }
    }
    .personal-data {
      .inputs-container {
        .input-container {
          .custom-input {
            .input-icon {
              left: initial;
              right: 28px;
            }
          }
        }
      }
    }
    .form-actions {
      .cancel-btn {
        margin-right: 0;
        margin-left: 34px;
        @include media-breakpoint-down(md) {
          margin-right: 0;
          margin-left: 8px;
        }
      }
    }
  }
}
</style>
