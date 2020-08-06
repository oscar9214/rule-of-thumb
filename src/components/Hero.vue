<template>
  <div class="hero" :style="{ backgroundImage: `url(${image})` }">
    <div class="container">
      <div class="hero__info-container">

        <h2 class="hero__title">
          <span class="hero__label">{{ label }}</span>
          {{ title }}
        </h2>

        <div class="hero__description">
          {{ description }}
        </div>

        <div class="hero__last-section">
          {{ lastSection }}
        </div>
        <div class="hero__voting-container">
          <div class="hero__like">

          </div>
          <div class="hero__dislike">

          </div>
        </div>
      </div>
      <div class="hero__closing-info">
        <div class="hero__closing-label">
          Closing in
        </div>
        <div class="hero__closing-days">
          <strong>{{ closingDays }}</strong> days
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    image: String,
    label: String,
    title: String,
    description: String,
    lastSection: String,
    closingDays: String
  },
  computed: {
    bgImage() {
      return require(this.image)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hero {
    padding-top: 150px;
    background-size: cover;

    &:before {
      content: '';
      position: absolute;
      background-image: linear-gradient(rgb(0 0 0 / 57%), transparent);
      width: 100%;
      height: 300px;
      top: 0;
      right: 0;
      z-index: 0;
    }

    &__info-container {
      width: 50%;

      padding: 36px 70px 36px 30px;
      box-sizing: border-box;
      text-align: left;
      color: white;
      position: relative;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      background-color: rgb(0 0 0 / 50%);

    }

    &__label {
      display: block;
      font-size: 16px;
      font-weight: 300;
    }

    &__title {
      font-size: 54px;
      font-weight: 500;
      margin-bottom: 20px;
    }

    &__description {
      font-size: 20px;
      font-weight: 300;
      margin-bottom: 20px;
    }

    &__last-section {
      font-weight: 700;
      font-size: 22px;
    }
  }


</style>
