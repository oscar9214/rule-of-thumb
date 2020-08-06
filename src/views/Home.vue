<template>
  <div class="home">
    <Hero :image="hero.image"
          :label="hero.label"
          :title="hero.title"
          :description="hero.description"
          :lastSection="hero.lastSection"
          :closingDays="hero.closingDays"
    />
    <Votes />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Votes from "@/components/Votes.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Votes
  },
  data() {
    return {
      hero: {
        image: '/assets/pope-francis.jpg',
        label: 'What’s your opinion on',
        title: 'Pope Francis?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt purus sed dui consequat ornare. Vestibulum non ante sed est varius tincidunt. Maecenas ac turpis molestie, tincidunt ipsum eget, sodales urna. Nunc ultrices tellus sem, a malesuada elit scelerisque a. Nunc ac magna et tellus lobortis dapibus quis at lorem.',
        lastSection: "What's Your Verdict?",
        closingDays: '22'
      }
    }
  }
};
</script>
