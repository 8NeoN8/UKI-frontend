<template>
  <main class="menu-container container flex justify-between p-2 test-bg-cyan">

    <div class="menu-left w-30 flex flex-column justify-between">
      <div @click="sendTo('/about')" class="username-display flex align-center justify-between test-bg-gray ph-1">

        <img class="username-image" src="https://www.shutterstock.com/shutterstock/photos/1890767740/display_1500/stock-photo--d-render-number-one-glowing-in-the-dark-pink-blue-neon-light-1890767740.jpg" alt="" width="70px" height="70px">

        <div class="username-text text-left w-100 fs-2 px-2"> NeoN</div>

      </div>

      <div class="main-options h-80 fs-2">

        <div @click="sendTo('/join')" class="menu-option flex flex-column">
          <img class="option-image h-80" src="https://www.shutterstock.com/shutterstock/photos/1890767740/display_1500/stock-photo--d-render-number-one-glowing-in-the-dark-pink-blue-neon-light-1890767740.jpg" width="100%" height="150px">
          <div class="option-text h-20 text-center test-bg-gray">Join</div>
        </div>
        <div @click="declareHost();sendTo('/lobby')" class="menu-option flex flex-column">
          <img class="option-image h-80" src="https://www.shutterstock.com/shutterstock/photos/1890767740/display_1500/stock-photo--d-render-number-one-glowing-in-the-dark-pink-blue-neon-light-1890767740.jpg" width="100%" height="150px">
          <div class="option-text h-20 text-center test-bg-gray">Custom</div>
        </div>
        <div @click="sendTo('/leaderboard')" class="menu-option flex flex-column">
          <img class="option-image h-80" src="https://www.shutterstock.com/shutterstock/photos/1890767740/display_1500/stock-photo--d-render-number-one-glowing-in-the-dark-pink-blue-neon-light-1890767740.jpg" width="100%" height="150px">
          <div class="option-text h-20 text-center test-bg-gray">Leaderboard</div>
        </div>
        <div @click="sendTo('/about')" class="menu-option flex flex-column">
          <img class="option-image h-80" src="https://www.shutterstock.com/shutterstock/photos/1890767740/display_1500/stock-photo--d-render-number-one-glowing-in-the-dark-pink-blue-neon-light-1890767740.jpg" width="100%" height="150px">
          <div class="option-text h-20 text-center test-bg-gray">About</div>
        </div>

      </div>

      <div @click="sendTo('/about')" class="change-name-button w-100 h-15 fs-2 text-center test-bg-gray flex flex-column justify-center">
        <div>CHANGE NAME</div>
      </div>

    </div>

    <div class="menu-right test-bg-yellow w-30 flex flex-column justify-between">
      <div class="gamename-display h-15 test-bg-blue"> U KNOW IT</div>

      <div class="news-display h-60 test-bg-purple">news</div>

      <div class="socials flex flex-column h-25 test-bg-red">

        <div class="social-link">Discord</div>
        <div class="social-link">Twitter</div>
        <div class="social-link">Github</div>
        <div class="social-link">Discord</div>

      </div>

    </div>

  </main>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { userStore } from '@/stores/user'

export default defineComponent({
  // type inference enabled
  name:'MenuView',
  data() {
    return {
      username: '',
      tempUsername:'',
      nameSet:false,
      store: userStore(),
    }
  },
  created() {
    if(this.store.user != ''){
      this.username = this.store.user
      this.nameSet = true
    }
  },
  mounted() {
    this.store.user = 'NeoN'

  },
  methods: {
    sendTo(route: string){
      this.$router.push(route)
    },
    checkUsername(name: string){
      name.length <= 16 ? this.nameSet = true : console.log('no go');
      this.store.user = name
      this.username = this.store.user
    },
    declareHost(){
      this.store.isHost = true
    }
  },
})
</script>

<style lang="scss">
@import '../assets/styles/menuView.scss'
</style>