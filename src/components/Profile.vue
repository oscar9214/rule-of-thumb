<template>
  <div class="profile" :style="{ backgroundImage: `url(${profile.image})` }">
    <div class="profile__text-container">
      <h4 class="profile__title">
        <div class="profile__title__status" :class="{ 'like': isLikeHigher, 'dislike': !isLikeHigher}">
          <img :src="likeIcon" alt="">
        </div>
        {{ profile.name }}
      </h4>
      <div class="profile__date">
        <strong>{{ profile.date | dateInDeltaTime }}</strong> in {{ profile.category }}
      </div>
      <div class="profile__description">
        {{ description }}
      </div>
      <div class="profile__controls">
        <div v-show="showLikeControls" class="profile__controls__like swipe" :class="{ 'selected': like, 'bounce-5': showLikeBounce, 'swipe-out': !showDescription }" @click="setLike">
          <img :src="likeIcon" alt="">
        </div>
        <div v-show="showLikeControls" class="profile__controls__dislike swipe" :class="{ 'selected': dislike, 'bounce-5': showDislikeBounce, 'swipe-out': !showDescription }" @click="setDislike">
          <img :src="likeIcon" alt="">
        </div>
        <button class="profile__vote-now" @click="sendVote">
          {{ buttonText }}
        </button>
      </div>
      <span class="profile__required" v-show="showRequired">Please select like or dislike.</span>

    </div>
    <div class="profile__stats">
      <div class="profile__stats__like" :style="{ width: likesWidth }">
        <img :src="likeIcon" alt=""> {{ likesWidth }}
      </div>
      <div class="profile__stats__dislike" :style="{ width: dislikesWidth }">
        {{ dislikesWidth }} <img :src="likeIcon" alt="">
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
  data() {
    return {
      like: false,
      dislike: false,
      showRequired: false,
      showDescription: true,
      showLikeBounce: false,
      showDislikeBounce: false,
      showLikeControls: true,
      likeIcon: this.getAssetUrl('assets/like.svg'),
    }
  },
  computed: {
    likesWidth() {
      return Math.ceil((this.profile.likes / (this.profile.likes + this.profile.dislikes)) * 100) + '%'
    },
    dislikesWidth() {
      return Math.floor((this.profile.dislikes / (this.profile.likes + this.profile.dislikes)) * 100) + '%'
    },
    description() {
      return this.showDescription ? this.profile.description : 'Thank you for voting!'
    },
    buttonText() {
      return this.showDescription ? 'Vote now' : 'Vote again'
    },
    isLikeHigher() {
      return this.profile.likes >= this.profile.dislikes;
    }
  },
  methods: {
    setLike() {
      this.like = true;
      this.dislike = false;
      this.showLikeBounce = true;
      setTimeout(() => {
        this.showLikeBounce = false;
      }, 1000);
    },
    setDislike() {
      this.like = false;
      this.dislike = true;
      this.showDislikeBounce = true;
      setTimeout(() => {
        this.showDislikeBounce = false;
      }, 1000);
    },
    sendVote() {
      if (!this.like && !this.dislike) {
        this.showRequired = true;
      } else if (!this.showDescription) {
        this.showDescription = true;
        this.like = false;
        this.dislike = false;
        this.showLikeControls = true;
      } else {
        this.showRequired = false;
        this.showDescription = false;
        this.$emit('send-vote', {
          like: this.like,
          profile: this.profile
        });
        setTimeout(() => {
          this.showLikeControls = false;
        }, 300);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .profile {
    padding: 400px 30px 70px 34px;
    text-align: left;
    box-sizing: border-box;
    background-size: cover;
    margin-bottom: 40px;
    position: relative;
    color: white;

    max-height: 350px;

    @include media-breakpoint-up(md) {
      max-height: 550px;
    }

    display: flex;
    align-items: flex-end;

    @include media-breakpoint-up(xxl) {
      max-height: 600px;
    }

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
      font-size: 42px;
      font-weight: 500;
      position: relative;

      &__status {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: -34px;
        bottom: 9px;

        img {
          height: 20px;
        }

        &.like {
          background-color: $color-green;
        }

        &.dislike {
          background-color: $color-orange;

          img {
            -webkit-transform: rotate(180deg);
            -moz-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            -o-transform: rotate(180deg);
            transform: rotate(180deg);
          }
        }
      }
    }

    &__description {
      font-size: 18px;
      margin-bottom: 20px;
    }

    &__vote-now {
      border-color: white;
      color: white;
    }

    &__date {
      font-size: 14px;
      margin-bottom: 10px;
    }

    &__controls {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      img {
        height: 20px;
      }

      &__like,
      &__dislike {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        border: 2px solid transparent;
        cursor: pointer;
        -webkit-transition: border-color .3s ease-in;
        -moz-transition: border-color .3s ease-in;
        -ms-transition: border-color .3s ease-in;
        -o-transition: border-color .3s ease-in;
        transition: border-color .3s ease-in;

        &.selected {
          border-color: white;
        }
      }

      &__like {
        background-color: $color-green;
      }

      &__dislike {
        background-color: $color-orange;

        img {
          -webkit-transform: rotate(180deg);
          -moz-transform: rotate(180deg);
          -ms-transform: rotate(180deg);
          -o-transform: rotate(180deg);
          transform: rotate(180deg);
        }
      }
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
        width: 1%;
        display: flex;
        align-items: center;
        font-size: 24px;
        -webkit-transition: width .3s ease-in;
        -moz-transition: width .3s ease-in;
        -ms-transition: width .3s ease-in;
        -o-transition: width .3s ease-in;
        transition: width .3s ease-in;
        min-width: 105px;
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

  .bounce-5 {
    animation-name: bounce-5;
    animation-timing-function: ease;
    opacity: 1;
    animation-duration: 1s;
    animation-iteration-count: 1;
  }

  .swipe {
    -webkit-transition: all .6s ease-out;
    -moz-transition: all .6s ease-out;
    -ms-transition: all .6s ease-out;
    -o-transition: all .6s ease-out;
    transition: all .6s ease-out;
    opacity: 1;
    transform: translateX(0);

    &-out {
      opacity: 0;
    }
  }

  @keyframes bounce-5 {
    0%   { transform: scale(1,1)    translateY(0); }
    10%  { transform: scale(1.1,.9) translateY(0); }
    30%  { transform: scale(.9,1.1) translateY(10px); }
    50%  { transform: scale(1,1)    translateY(0); }
    57%  { transform: scale(1,1)    translateY(7px); }
    64%  { transform: scale(1,1)    translateY(0); }
    100% { transform: scale(1,1)    translateY(0); }
  }


</style>
