<template>
  <div class="container nav__container">
    <div class="nav" >
      <router-link to="/">Rule of Thumb</router-link>
      <div class="nav__sites">
        <router-link to="/past-trials">Past Trials</router-link>
        <router-link to="/how-it-works">How it Works</router-link>
        <router-link to="/login">Log In / Sign Up</router-link>
      </div>
      <svg class="nav__search" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .nav {
    padding: 20px 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    z-index: 1;
    flex-direction: column;


    &__sites {
      @include media-breakpoint-down(md) {
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 10px;

        a {
          padding-right: 0;
        }
      }

      a.router-link-exact-active {
        color: $color-green;
      }
    }

    @include media-breakpoint-up(md) {
      flex-direction: row;
      padding: 50px 20px;
    }


    &__container {
      position: relative;
    }

    &__search {
      margin: 0 auto;

      @include media-breakpoint-up(md) {
        margin: 0;
      }
    }

    & > a {
      &:first-of-type {
        font-size: 28px;
        text-align: center;
        margin-bottom: 10px;

        @include media-breakpoint-up(md) {
          margin-right: auto;
          margin-bottom: 0;
        }
      }
    }

    a {
      color: white;
      text-decoration: none;
      font-size: 18px;

      @include media-breakpoint-up(md) {
        padding-right: 30px;
      }
    }
  }
</style>
