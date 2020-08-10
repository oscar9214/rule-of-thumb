<template>
  <div class="votes container" >
    <h2 class="votes__title">Votes</h2>
    <div class="votes-container">
      <div class="votes__item" v-for="(profile) in profiles" :key="profile.id">
        <Profile
          :profile="profile"
          @send-vote="sendVote"
        />
      </div>
    </div>

  </div>
</template>

<script>
  import Profile from "@/components/Profile.vue";

export default {
  name: "Votes",
  components: {
    Profile
  },
  props: {

  },
  created() {
    this.loadVotes();
  },
  data() {
    return {
      profiles: []
    }
  },
  methods: {
    sendVote(data) {
      let profile = data.profile;
      if (data.like) {
        profile.likes += 1;
      } else {
        profile.dislikes += 1;
      }
      localStorage.ruleOfThumbData = JSON.stringify(this.profiles);
    },
    loadVotes() {
      let profiles = localStorage.ruleOfThumbData ? JSON.parse(localStorage.ruleOfThumbData) : null;
      if (!profiles) {
        profiles = [
          {
            name: 'Kanye West',
            date: 1594072111000,
            category: 'Entertainment',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt',
            likes: 64,
            dislikes: 36,
            id: 1,
            image: '/assets/kanye.jpg'
          },
          {
            name: 'Mark Zuckerberg',
            date: 1591761782000,
            category: 'Business',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt',
            likes: 36,
            dislikes: 64,
            id: 2,
            image: '/assets/Mark.jpg'
          },
          {
            name: 'Cristina Fernandez de Kirchner',
            date: 1588996982000,
            category: 'Politics',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt',
            likes: 36,
            dislikes: 64,
            id: 3,
            image: '/assets/Cristina.jpg'
          },
          {
            name: 'Malala Yousafzai',
            date: 1586404982000,
            category: 'Entertainment',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt',
            likes: 64,
            dislikes: 36,
            id: 4,
            image: '/assets/malala.jpg'
          },
        ]
      }
      this.profiles = profiles;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .votes {

    &-container {
      display: flex;
      flex-wrap: wrap;
    }

    &__title {
      font-size: 42px;
      font-weight: 500;
      margin-bottom: 40px;
    }

    &__item {
      width: 100%;

      @include media-breakpoint-up(md) {
        width: 50%;

        &:nth-of-type(2n+1) .profile {
          margin-right: 20px;
        }

        &:nth-of-type(2n) .profile {
          margin-left: 20px;
        }
      }
    }
  }


</style>
