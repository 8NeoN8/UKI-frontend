<template>
  <div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { userStore } from '@/stores/user';
import { playersStore } from '@/stores/players';


export default defineComponent({
  name:'MatchDeck',
  data() {
    return {
      
    }
  },
  computed:{
    UserStore(){
      return userStore();
    },
    PlayersStore(){
      return playersStore();
    },

  },
  mounted() {

  },
  methods: {

  },
})
</script>