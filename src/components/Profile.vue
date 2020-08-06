<template>
  <div class="profile" :style="{ backgroundImage: `url(${profile.image})` }">
    <div class="profile__text-container">
      <div class="profile__title">
        {{ profile.name }}
      </div>
      <div class="profile__date">
        <strong>{{ profile.date | dateInDeltaTime }}</strong> in {{ profile.category }}
      </div>
      <div class="profile__description">
        {{ profile.description }}
      </div>
      <div class="profile__controls">
        <div class="profile__controls__like">

        </div>
        <div class="profile__controls__dislike">

        </div>
        <button class="profile__vote-now">
          Vote now
        </button>
      </div>

    </div>
    <div class="profile__stats">
      <div class="profile__stats__like">
        <img src="/assets/like.svg" alt=""> {{ profile.likes }}%
      </div>
      <div class="profile__stats__dislike">
        {{ profile.dislikes}}% <img src="/assets/like.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    profile: Object
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .profile {
    padding-top: 400px;
    padding-bottom: 70px;
    padding-left: 30px;
    text-align: left;
    box-sizing: border-box;
    background-size: cover;
    margin-bottom: 40px;
    position: relative;
    color: white;

    &:before {
      content: '';
      background-image: linear-gradient(transparent, rgb(0 0 0 / 57%));
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 0;
    }



    &__text-container {
      z-index: 2;
      position: relative;
    }

    &__title {
      font-size: 32px;
      font-weight: 500;
    }

    &__description {
      font-size: 18px;
    }

    &__vote-now {
      background: none;
      border: 2px white solid;
      padding: 10px 20px;
      color: white;
      font-size: 16px;
    }

    &__date {
      font-size: 14px;
    }

    &__stats{
      height: 50px;
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      width: 100%;

      img {
        height: 30px;
      }

      &__like,
      &__dislike {
        width: 50%;
        display: flex;
        align-items: center;
        font-size: 24px;
      }

      &__like {
        background-color: $color-green-transparent;
        padding-left: 10px;

        img {
          margin-right: 10px;
        }

      }

      &__dislike {
        background-color: $color-orange-transparent;
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

    &__controls__dislike {

    }
  }


</style>
