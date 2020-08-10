<template>
  <div class="separator">
    <hr>
  </div>
</template>

<script>
export default {
  name: "Separator",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .separator {
    padding: 30px 0;

    hr {
      border-top: 1px dashed $color-gray-medium;
    }
  }
</style>
