<template>
  <main class="menu-container">

    <header class="menu-header">
      <h1>U KNOW IT</h1>
      <h3>Another game were friendships are ruined</h3>
      <h4>Your username: {{username}}</h4>
    </header>

    <ul class="menu-main">

      <div @click="sendTo('/about')" class="mm-link">Host</div>
      <div @click="sendTo('/about')" class="mm-link">Join</div>
      <div @click="sendTo('/about')" class="mm-link">Leaderboard</div>
      <div @click="sendTo('/about')" class="mm-link">About</div>
      <div class="mm-link">Change Name</div>
    
    </ul>

    <footer class="menu-footer">
      <div>discord</div>
      <div>github</div>
      <div>patreon</div>
      <div>twitter</div>
    </footer>

    <div class="username-popup" v-if="!nameSet">
      <div class="username-container">
        <label for="username-input" class="username-input-label">Set your Username</label>
        <input type="text" class="username-input" name="username-input" v-model="username">
        <button type="submit" class="username-submit-button" maxLenght=20 @click="checkUsername(username)">Set</button>
      </div>
    </div>

  </main>

</template>

<script lang="ts">
import TheWelcome from '../components/TheWelcome.vue'

import { RouterLink } from 'vue-router'
import { defineComponent } from 'vue'
import { useCounterStore } from '@/stores/counter'


export default defineComponent({
  // type inference enabled
  props: {
    name: String,
    msg: { type: String, required: false }
  },
  data() {
    return {
      count: 1,
      counter: useCounterStore(),
      username:'',
      nameSet:false,
    }
  },
  mounted() {
    this.name // type: string | undefined
    this.msg // type: string
    this.count // type: number

    
  },
  components:{
    TheWelcome,
    RouterLink,
  },
  methods: {
    sendTo(route: string){
      this.$router.push(route)
    },
    checkUsername(name: string){
      console.log(name.length);
      name.length <= 16 ? this.nameSet = true : console.log('no go');
    }
  },
})
</script>

<style lang="scss">
@import '../assets/styles/menuView.scss'
</style>