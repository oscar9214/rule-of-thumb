<template>
  <div id="app">
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>

<style lang="scss">

  * {
    margin: 0;
    padding: 0;
  }

  button, a {
    &:focus {
      outline: none;
    }
  }

#app {
  font-family: Lato, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: $color-gray;

}

  .container {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 20px;

    @include media-breakpoint-up(xxl) {
      max-width: 1280px;
    }

    &-padding-tb {
      padding-top: 40px;
      padding-bottom: 40px;
    }
  }

  .default-page {
    background-color: $color-gray;
    color: white;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    background: none;
    border: 2px white solid;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
</style>
<script>
  import Navigation from "./components/Navigation";
  import Footer from "./components/Footer";
  export default {
    components: { Footer, Navigation }
  };
</script>