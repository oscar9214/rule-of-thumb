<template>
  <div class="default-page">
    <h1>{{ title }}</h1>
  </div>
</template>
<script>
  export default {
    name: "DefaultPage",
    props: {
      title: String,
    }
  };
</script>
