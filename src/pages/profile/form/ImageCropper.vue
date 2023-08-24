<template>
  <div class="image-cropper">
    <div class="image-container">
      <div class="user-image">
        <img
          :src="avatar"
          :style="cropped ? imgStyle : ''"
          class="avater-con"
        />
      </div>
      <img
        src="../../../assets/icons/Iconawesome-user-edit.png"
        class="edit-icon"
        @click="handleShowDialog"
        v-if="editable"
      />
      <div class="user-name">
        <h5>Mohamed Abd allah</h5>
      </div>
    </div>

    <base-dialog
      :show="showDialog"
      title="قص الصورة"
      :showSaveBtn="showSaveBtn"
      @close="showDialog = false"
      @save="saveCroppeImage"
    >
      <div class="image-cropper-container">
        <div class="outer-card-croppe">
          <div class="inner-card">
            <div class="upload-container">
              <template v-if="!uploadedImage">
                <input
                  type="file"
                  @change="handleAvatar"
                  name="avatar"
                  accept=".png, .jpg, .jpeg"
                />
                <img src="../../../assets/icons/Iconawesome-upload.png" />
              </template>
              <img :src="uploadedImage" :style="imgStyle" />
            </div>
          </div>
        </div>
        <div class="range" v-if="!!uploadedImage">
          <input
            type="range"
            min="165"
            max="500"
            step="0"
            v-model="selectedValue"
          />
        </div>
      </div>
    </base-dialog>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import { reactive, ref, watch, computed } from "vue";

import BaseDialog from "../../../components/ui/BaseDialog.vue";
export default {
  components: { BaseDialog },
  props: ["editable"],
  setup() {
    let showDialog = ref(false);
    let avatar = ref(require("../../../assets/images/profile-test.png"));
    let uploadedImage = ref();
    let selectedValue = ref();
    let showSaveBtn = ref(false);
    let cropped = ref(false);
    let style = reactive({
      width: "",
    });
    const { t } = useI18n();
    const handleShowDialog = () => {
      showDialog.value = true;
    };
    watch(selectedValue, (newval) => {
      style.width = `${newval}px`;
    });

    const imgStyle = computed(() => style);

    const handleAvatar = (e) => {
      showSaveBtn.value = true;
      const selectedImage = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        uploadedImage.value = reader.result;
      };
      reader.readAsDataURL(selectedImage);
    };
    const saveCroppeImage = () => {
      avatar.value = uploadedImage.value;
      showDialog.value = false;
      cropped.value = true;
    };
    return {
      t,
      showDialog,
      handleShowDialog,
      handleAvatar,
      avatar,
      selectedValue,
      imgStyle,
      uploadedImage,
      showSaveBtn,
      saveCroppeImage,
      cropped,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";
.image-cropper {
  .image-container {
    display: flex;
    align-items: center;
    position: relative;
    .edit-icon {
      width: 27px;
      height: 22px;
      position: absolute;
      bottom: 25px;
      right: 30px;
      @include media-breakpoint-down(md) {
        bottom: 40px;
        right: initial;
        left: -45px;
      }
    }
    .user-image {
      border: 5px solid #d11388;
      position: relative;
      border-radius: 50%;
      overflow: hidden;
      width: 176px;
      height: 176px;
      background: #fff;
      border-radius: 50%;
      overflow: hidden;
      text-align: center;

      .avater-con {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
      }
    }
    .user-name {
      margin-right: 50px;
      @include media-breakpoint-down(md) {
        display: none;
      }
      h5 {
        color: #000000;
        font-size: 36px;
        font-family: "Bahij-Bold";
      }
    }
  }
}
.image-cropper-container {
  .outer-card-croppe {
    width: 367px;
    height: 227px;
    background: #e5e5e5;
    border-radius: 40px;
    position: relative;
    @include media-breakpoint-down(md) {
      width: 100%;
    }
    .inner-card {
      width: 176px;
      height: 176px;
      background: #ffffff;
      position: absolute;
      background: #c2c1c1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .upload-container {
        width: 176px;
        height: 176px;
        background: #fff;
        border-radius: 50%;
        overflow: hidden;
        text-align: center;
        position: relative;
        input,
        img {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          position: absolute;
        }
        input {
          opacity: 0;
          z-index: 2;
        }
      }
    }
  }
  .range {
    text-align: center;
    margin-top: 43px;
    input {
      -webkit-appearance: none;
      width: 154px;
      height: 2px;
      background: #e5e5e5;
      outline: none;
      opacity: 0.7;
      -webkit-transition: 0.2s;
      transition: opacity 0.2s;
    }
    input::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: #d9d8d6;
      cursor: pointer;
    }

    input::-moz-range-thumb {
      width: 13px;
      height: 13px;
      background: #d9d8d6;
      cursor: pointer;
    }
  }
}
.anglish_version {
  .image-cropper {
    .image-container {
      .edit-icon {
        right: initial;
        left: 35px;
        @include media-breakpoint-down(md) {
          right: -45px;
          left: inherit;
        }
      }
      .user-name {
        margin-left: 50px;
        margin-right: 0;
      }
    }
  }
}
</style>