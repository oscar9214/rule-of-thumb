<template>
  <div class="home">
    <Hero :image="hero.image"
          :label="hero.label"
          :title="hero.title"
          :description="hero.description"
          :lastSection="hero.lastSection"
          :closingDays="hero.closingDays"
          :wikiLink="hero.wikiLink"
    />
    <div class="container container-padding-tb">
      <Alert :title="alert.title"
             :titleStrong="alert.titleStrong"
             :message="alert.message"
      />
    </div>
    <Votes />
    <div class="container">
      <Alert :title="secondAlert.title"
             :button="secondAlert.button"
             :backgroundImage="secondAlert.backgroundImage"
      />
      <Separator />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Votes from "@/components/Votes.vue";
import Alert from "@/components/Alert.vue";
import Separator from "../components/Separator";

export default {
  name: "Home",
  components: {
    Separator,
    Hero,
    Votes,
    Alert,
  },
  data() {
    return {
      hero: {
        image: this.getAssetUrl('assets/pope-francis.jpg'),
        label: 'What’s your opinion on',
        title: 'Pope Francis?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt purus sed dui consequat ornare. Vestibulum non ante sed est varius tincidunt. Maecenas ac turpis molestie, tincidunt ipsum eget, sodales urna. Nunc ultrices tellus sem, a malesuada elit scelerisque a. Nunc ac magna et tellus lobortis dapibus quis at lorem.',
        lastSection: "What's Your Verdict?",
        closingDays: '22',
        wikiLink: 'https://en.wikipedia.org/wiki/Pope_Francis'
      },
      alert: {
        title: 'Speak out. Be heard.',
        titleStrong: 'Be counted',
        message: 'Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. You share your opinion, we analyze and put the data in a public report.'
      },
      secondAlert: {
        title: 'Is there anyone else you would want us to add?',
        button: 'Submit a name',
        backgroundImage: this.getAssetUrl('assets/backgroundpeople.jpg')
      }
    }
  }
};
</script>
