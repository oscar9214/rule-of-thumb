<template>
  <div class="votes container" >

    <div class="votes__item" v-for="(profile) in profiles" :key="profile.id">
      <Profile :profile="profile" />
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
  data() {
    return {
      profiles: [
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
          date: 1594072111000,
          category: 'Business',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt',
          likes: 36,
          dislikes: 64,
          id: 2,
          image: '/assets/Mark.jpg'
        },
        {
          name: 'Cristina Fernandez de Kirchner',
          date: 1594072111000,
          category: 'Politics',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt',
          likes: 36,
          dislikes: 64,
          id: 3,
          image: '/assets/Cristina.jpg'
        },
        {
          name: 'Malala Yousafzai',
          date: 1594072111000,
          category: 'Entertainment',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt',
          likes: 64,
          dislikes: 36,
          id: 4,
          image: '/assets/malala.jpg'
        },
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .votes {
    display: flex;
    flex-wrap: wrap;

    &__item {
      width: 50%;

      &:nth-of-type(2n+1) .profile {
        margin-right: 20px;
      }

      &:nth-of-type(2n) .profile {
        margin-left: 20px;
      }
    }
  }


</style>
