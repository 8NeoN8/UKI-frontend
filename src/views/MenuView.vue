<template>
  <main class="menu-container flex flex-column justify-between">

    <header class="menu-header test-bg-yellow text-center h-10 text-left flex flex-between">

      <div class="header-left test-bg-lime w-85 flex flex-column justify-center px-1">
        <div class="game-name-display fsh-3">U KNOW IT</div>
        <div class="game-subtitle-display fsh-2">Another game where friendships are ruined</div>
      </div>

      <div class="header-right test-bg-red w-15 center-content">
        <div class="username-diplay fsh-2">{{username}}</div>
      </div>

    </header>

    <div class="menu-main flex justify-between h-80">
      <ul class="menu-main-options flex flex-column test-bg-brown w-85 justify-start p-2">
  
        <button @click="sendTo('/about')" class="mm-link fsh-2 text-left"> <span>Host</span></button>
        <button @click="sendTo('/about')" class="mm-link fsh-2 text-left">Join</button>
        <button @click="sendTo('/about')" class="mm-link fsh-2 text-left">Leaderboard</button>
        <button @click="sendTo('/about')" class="mm-link fsh-2 text-left">About</button>
        <button class="mm-link fsh-2 text-left" @click="nameSet = false; tempUsername = ''; username = ''">Change Name</button>
      
      </ul>

      <aside class="menu-main-news center-content w-15 test-bg-cyan">
        "news" o cualquier vaina que queramos poner aqui
      </aside>
    </div>

    <footer class="menu-footer test-bg-purple h-10 overflow-h w-100">
      <div class="social-links flex justify-around align-center overflow-h">
        <div class="button-base">discord</div>
        <div class="button-base">github</div>
        <div class="button-base">patreon</div>
        <div class="button-base">twitter</div>
      </div>
      <div class="copyright-section">
        copyright &copy; Haskell? I barely know 'er 2024
      </div>
    </footer>

    <div class="username-popup test-bg-purple" v-if="!nameSet">
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
  created() {
    if(this.store.user != ''){
      this.username = this.store.user
      this.nameSet = true
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