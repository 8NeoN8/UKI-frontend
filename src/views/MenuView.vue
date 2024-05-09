<template>
  <main class="menu-container container flex justify-between p-2 ">

    <div class="menu-left w-30 flex flex-column justify-between">

      <div @click="changeNameStart()" class="username-display flex align-center justify-between test-bg-gray ph-1">

        <img class="username-image" :src="userImg" alt="" width="70px" height="70px">

        <div v-if="!changingName" class="username-text text-left w-100 fs-2 px-2"> {{ username }}</div>

        <input v-if="changingName" autofocus @keyup.enter="changingName = false" type="text" class="w-100" v-model="username">

      </div>

      <div class="main-options h-80 fs-2">

        <template v-for="(option, index) in sections" :key="index">
          <template v-if="option.text == 'Custom'">

            <div @click="declareHost();sendTo(option.link)" class="menu-option flex flex-column">
              <img class="option-image h-80" :src="testImg" width="100%" height="100%">
              <div class="option-text h-20 text-center test-bg-gray">{{option.text}}</div>
            </div>

          </template>

          <template v-if="option.text != 'Custom'">
            <div @click="sendTo(option.link)" class="menu-option flex flex-column">
              <img class="option-image h-80" :src="testImg" width="100%" height="100%">
              <div class="option-text h-20 text-center test-bg-gray">{{option.text}}</div>
            </div>
          </template>
        </template>

      </div>

      <div @click="changeNameStart()" class="change-name-button w-100 h-15 fs-2 text-center test-bg-gray flex flex-column justify-center">
        <div>CHANGE NAME</div>
      </div>

    </div>

    <div class="menu-right w-30 flex flex-column justify-between">
      <div class="gamename-display h-15 test-bg-gray fs-3 flex center-content">
        <div class="">U KNOW IT</div>
      </div>

      <div class="news-display h-55 test-bg-purple flex center-content fs-3">

      </div>

      <div class="socials flex flex-column h-25">

        <template v-for="(link, index) in socials" :key="index">
          
          <a :href="link.link" target="_blank" rel="noopener"  class="social-link social-redirect text-center test-bg-lime flex center-content fs-2">
             {{ link.text }}
          </a>
        </template>

      </div>

    </div>

    <div v-if="false" class="login-form test-bg-cyan flex flex-column align-center pt-4">

      <div class="flex test-bg-blue center-content">
        <div class="avatar-selector test-bg-red">          
          <img :src="userAvatars[currentAvatar]" width="80px" height="80px">
          <div class="selector-buttons flex justify-between">
            <button class="fsh-2" @click="currentAvatar > 0 ? currentAvatar-- : currentAvatar = 2"><</button>
            <button class="fsh-2" @click="currentAvatar < 2 ? currentAvatar++ : currentAvatar = 0">></button>
          </div>
        </div>
        <input type="text" class="username-input h-50">
        
        
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
      sections:[
        {
          text: 'Join',
          link: '/game'
        },
        {
          text: 'Custom',
          link: '/lobby'
        },
        {
          text: 'Leaderboard',
          link: '/leaderboard'
        },
        {
          text: 'About',
          link: '/about'
        },
      ],
      socials:[
        {
            text:'discord',
            link:'https://www.discord.com'
        },
        {
            text:'twitter',
            link:'https://www.twitter.com'
        },
        {
            text:'github',
            link:'https://www.github.com'
        },
        {
            text:'patreon',
            link:'https://www.patreon.com'
        },
      ],
      changingName: false,
      userAvatars:[
        'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
        'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png',
        'https://static.vecteezy.com/system/resources/thumbnails/019/896/012/small_2x/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png',
      ],
      currentAvatar: 0,

    }
  },
  computed:{
    testImg(){
      return this.store.testImg
    },
    userImg(){
      return this.store.userImg
    }
  },
  created() {
  },
  mounted() {
    this.store.user = 'NeoN'

    if(this.store.user != ''){
      this.username = this.store.user
      this.nameSet = true
    }
  },
  methods: {
    sendTo(route: string){
      this.$router.push(route)
    },
    checkUsername(name: string){
      this.store.user = name
      this.username = this.store.user
    },
    declareHost(){
      this.store.isHost = true
    },
    changeNameStart(){
      this.changingName = true
    }
  },
})
</script>

<style lang="scss">
@import '../assets/styles/menuView.scss'
</style>