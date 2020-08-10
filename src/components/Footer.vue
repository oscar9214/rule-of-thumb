<template>
  <div class="container">
    <Separator />
    <div class="footer" >
      <div class="footer__left-container">
        <a href="">Terms and conditions</a>
        <a href="">Privacy Policy</a>
        <a href="">Contact Us</a>
      </div>
      <div class="footer__right-container">
        <span>Follow Us</span>
        <img :src="facebookIcon" alt="">
        <img :src="twitterIcon" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Separator from "./Separator";
export default {
  name: "Footer",
  components: { Separator },
  data() {
    return {
      facebookIcon: this.getAssetUrl('assets/facebook-logo.svg'),
      twitterIcon: this.getAssetUrl('assets/twitter.svg'),
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .footer {
    display: flex;
    margin-bottom: 20px;
    font-size: 14px;
    //flex-direction: column;
    flex-direction: row;

    @include media-breakpoint-up(md) {
      flex-direction: row;
      margin-bottom: 50px;
    }

    a {
      color: $color-gray;
      text-decoration: none;
    }

    &__left-container {
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      a {
        margin-bottom: 10px;
      }

      @include media-breakpoint-up(md) {
        flex-direction: row;
        align-items: center;

        a {
          margin-right: 30px;
          margin-bottom: 0;
        }
      }


    }


    &__right-container {

      display: flex;
      align-items: center;
      justify-content: flex-end;
      //flex-direction: column;
      margin-left: auto;
      flex-wrap: wrap;

      span {
        flex: 0 0 100%;
        text-align: right;
      }

      * {
        margin-left: 10px;
      }

      @include media-breakpoint-up(md) {
        //flex-direction: row;
        align-items: center;
        flex-wrap: unset;


        * {
          margin-left: 20px;
          margin-bottom: 0;
        }
      }



      img {
        height: 20px;
      }
    }
  }
</style>
