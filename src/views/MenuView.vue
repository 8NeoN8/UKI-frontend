<template>
  <main class="menu-container flex flex-column justify-between">

    <header class="menu-header test-bg-yellow text-center h-25 flex flex-column justify-center">
      <div class="fs-3">U KNOW IT</div>
      <div class="fsh-2">Another game were friendships are ruined</div>
      <div class="fs-1">Your username: {{username}}</div>
    </header>

    <ul class="menu-main flex flex-column test-bg-brown h-100">

      <button @click="sendTo('/about')" class="mm-link">Host</button>
      <button @click="sendTo('/about')" class="mm-link">Join</button>
      <button @click="sendTo('/about')" class="mm-link">Leaderboard</button>
      <button @click="sendTo('/about')" class="mm-link">About</button>
      <button class="mm-link" @click="nameSet = false; tempUsername = ''; username = ''">Change Name</button>
    
    </ul>

    <footer class="menu-footer test-bg-purple h-25 overflow-h w-100">
      <div class="social-links flex justify-around align-center overflow-h">
        <div class="button-base">discord</div>
        <div class="button-base">github</div>
        <div class="button-base">patreon</div>
        <div class="button-base">twitter</div>
      </div>
      <div class="copyright-section">
        copyright &copy Haskell? I barely know 'er 2024
      </div>
    </footer>

    <div class="username-popup" v-if="!nameSet">
      <div class="username-container">
        <label for="username-input" class="username-input-label">Set your Username</label>
        <input type="text" class="username-input" name="username-input" v-model="tempUsername">
        <button type="submit" class="username-submit-button" maxLenght=20 @click="checkUsername(tempUsername)">Set</button>
      </div>
    </div>

  </main>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useUserStore } from '@/stores/username'

export default defineComponent({
  // type inference enabled
  props: {
    name: String,
    msg: { type: String, required: false }
  },
  data() {
    return {
      username: '',
      tempUsername:'',
      nameSet:false,
      store: useUserStore(),
    }
  },
  mounted() {
  },
  components:{
  },
  methods: {
    sendTo(route: string){
      this.$router.push(route)
    },
    checkUsername(name: string){
      console.log(name.length);
      name.length <= 16 ? this.nameSet = true : console.log('no go');
      this.store.user = name
      this.username = this.store.user
    }
  },
})
</script>

<style lang="scss">
@import '../assets/styles/menuView.scss'
</style>