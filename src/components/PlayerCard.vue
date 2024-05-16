<template>
  <div class="player-card fs-3 text-center">
    {{ cardValue }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { userStore } from '@/stores/user';
import { playersStore } from '@/stores/players';


export default defineComponent({
  name:'PlayerCard',
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
  props:{
    cardOwner:{
      type: String,
      default: userStore().userData.name
    },
    cardValue:{
      type: String,
      default: ''
    },
    cardType:{
      type: String,
      default: 'numberCard'
    }
  },
  mounted() {

  },
  methods: {

  },
})
</script>

<style lang="scss">
@import '../assets/styles/globalStyles.scss'
</style>