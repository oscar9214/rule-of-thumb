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

        <div class="hero__more-info">
          <a :href="wikiLink" target="_blank" class="hero__more-info__link"><img src="/assets/wikipedia.svg" alt=""> More Information</a>
        </div>

        <div class="hero__last-section">
          {{ lastSection }}
        </div>
        <div class="hero__voting-container">
          <div class="hero__like">
            <img src="/assets/like.svg" alt="">
          </div>
          <div class="hero__dislike">
            <img src="/assets/like.svg" alt="">
          </div>
        </div>
      </div>

    </div>
    <div class="hero__closing-info">
      <div class="hero__closing-label">
        Closing in
      </div>
      <div class="hero__closing-info__sepparator">
        <div class="top"></div>
        <div class="middle"></div>
        <div class="bottom"></div>
      </div>
      <div class="hero__closing-days">
        <strong>{{ closingDays }}</strong> days
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
    closingDays: String,
    wikiLink: String
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
    background-position: center;

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


      padding: 36px 70px 36px 30px;
      box-sizing: border-box;
      text-align: left;
      color: white;
      position: relative;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      background-color: rgb(0 0 0 / 50%);
      margin-bottom: 140px;

      @include media-breakpoint-up(md) {
        width: 50%;
      }

    }

    &__more-info {
      margin-bottom: 30px;

      img {
        height: 16px;
        margin-right: 5px;
      }

      &__link {
        color: white;
        font-size: 12px;
        display: flex;
        text-underline-position: under;
      }
    }

    &__label {
      display: block;
      font-size: 16px;
      font-weight: 300;
    }

    &__title {
      font-size: 44px;
      font-weight: 500;
      margin-bottom: 10px;

      @include media-breakpoint-up(md) {
        font-size: 54px;
        margin-bottom: 20px;
      }
    }

    &__description {
      font-size: 18px;
      font-weight: 300;
      margin-bottom: 20px;

      @include media-breakpoint-up(md) {
        font-size: 20px;
      }
    }

    &__last-section {
      font-weight: 700;
      font-size: 22px;
    }

    &__closing-info {
      display: flex;
      margin-top: 40px;

      &__sepparator {
        width: 20px;
        overflow: hidden;
        position: relative;

        .top {
          position: absolute;
          background-color: $color-light-gray-transparent;
          height: 56px;
          width: 40px;
          transform: rotate(-45deg) translate(11px, -18px);
        }

        .middle {
          background-color: $color-gray-transparent;
          position: absolute;
          height: 20px;
          width: 20px;
          transform: rotate(45deg) translate(1px, 25px);
        }

        .bottom {
          position: absolute;
          background-color: $color-light-gray-transparent;
          height: 56px;
          width: 40px;
          transform: rotate(45deg) translate(11px, 37px);
        }
      }
    }

    &__closing-label {
      width: 30%;
      padding: 20px;
      text-align: right;
      text-transform: uppercase;
      color: white;
      background-color: $color-gray-transparent;
      position: relative;
    }

    &__closing-days {
      width: 70%;
      padding: 10px 0;
      text-align: left;
      font-size: 32px;
      background-color: $color-light-gray-transparent;
    }

    $like-container-height: 80px;

    &__voting-container {
      display: flex;
      position: absolute;
      bottom: -#{$like-container-height};
      left: 0;
      width: 100%;
      height: #{$like-container-height};

      img {
        height: 100%;
      }
    }



    &__like,
    &__dislike {
      width: 50%;
      display: flex;
      align-items: center;
      font-size: 24px;
      justify-content: center;
      padding: 20px;
    }

    &__like {
      background-color: $color-green-transparent-fuller;
      padding-left: 10px;

      img {
        margin-right: 10px;
      }

    }

    &__dislike {
      background-color: $color-orange-transparent-fuller;
      padding-right: 10px;
      text-align: right;
      flex-direction: row-reverse;

      img {
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        transform: rotate(180deg);
        margin-right: 10px;
      }
    }

  }


</style>
