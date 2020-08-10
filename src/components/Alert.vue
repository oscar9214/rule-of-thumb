<template>
  <div class="alert" v-show="showAlert" :style="{ backgroundImage: image }">
    <div class="alert__text-container">
      <div class="alert__title">
        {{ title }}
        <strong >{{ titleStrong }}</strong>
      </div>
      <div class="alert__message">
        {{ message }}
      </div>
    </div>
    <div class="alert__close" @click="hideAlert">
      <img src="/assets/close.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    title: String,
    titleStrong: String,
    message: String,
    button: String,
    image: String
  },
  data() {
    return {
      showAlert: true
    }
  },
  methods: {
    hideAlert() {
      this.showAlert = false;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .alert {
    background-color: $color-light-gray;
    padding: 20px 45px 20px 25px;
    position: relative;

    &__text-container {
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;

      @include media-breakpoint-up(md) {
        flex-direction: row;
        text-align: left;
      }
    }

    &__title {
      font-size: 24px;
      font-weight: 300;
      margin-bottom: 15px;

      strong {
        font-size: 36px;
        display: block;
      }

      @include media-breakpoint-up(md) {
        margin-bottom: 0;
      }
    }

    &__message {
      line-height: 26px;

      @include media-breakpoint-up(md) {
        width: 70%;
        margin-left: 40px;
      }
    }

    &__close {
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;

      @include media-breakpoint-up(md) {
        top: 50%;
        transform: translateY(-50%);
      }

      img {
        height: 15px;
      }
    }
  }
</style>
