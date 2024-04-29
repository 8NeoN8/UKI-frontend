<template>
  <div class="lobby-container container flex h-100">
    <div class="lobby-left w-65 h-100 test-bg-yellow p-1">
      <div class="back-button-room-code flex justify-between test-bg-cyan h-10">
        <div class="go-back-buttons flex align-center pl-1 test-bg-brown w-50">
          <button class="button-base" v-if="isHost" @click="removeHost(); sendTo('/')">Go back host</button>
          <button class="button-base" v-if="!isHost" @click="sendTo('/')">Go back</button>
        </div>

        <div class="lobby-code-display hidden flex justify-around align-center w-50 test-bg-purple">
          <span class="code fsh-2">#{{lobbyCode}}</span>
          <button class="show button-base">Show</button>
          <button class="change button-base">Change</button>
        </div>

      </div>

      <div class="chat-room flex flex-column w-100 h-90 test-bg-cyan">
        <div class="chat-messages test-bg-lime h-95 flex px-1">
          <template v-for="(msg, index) in messages" :key="index">
            <div class="chat-msg mb-1 fs-1">
              {{ msg }}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia eaque minima, aspernatur, dicta ducimus possimus soluta ea modi alias rem debitis, repudiandae quis corrupti. Repudiandae delectus voluptatibus quisquam corrupti laborum.
            </div>
          </template>
        </div>
        <div class="chat-input h-5">
          <input type="text" class="w-100 h-100 p-1 fs-1" placeholder="text">
        </div>
      </div>
    </div>

    <div class="lobby-right w-35 h-100 test-bg-red p-1 flex flex-column justify-between">
      <template v-for="(player, index) in players" :key="index">

        <div class="lobby-player test-bg-white w-100 flex justify-between align-center">
          <img :src="image" width="80px" height="80px" class="w-15">
          <div class="player-name ml-1 w-70">
            <span class="name-text ">{{player.name}}</span>
            <span v-if="player.host" class="host-indicator"> HOST</span>
          </div>
          <div class="status w-15">
            {{ player.ready ? 'Ready' : 'Not Ready' }}
          </div>
        </div>

      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useUserStore } from '@/stores/username'

export default defineComponent({
  name:'CustomView',
  data() {
    return {
      store: useUserStore(),
      isHost:false,
      lobbyCode:'F52ALP',
      image: 'https://www.shutterstock.com/shutterstock/photos/1890767740/display_1500/stock-photo--d-render-number-one-glowing-in-the-dark-pink-blue-neon-light-1890767740.jpg',
      players:[
        {
          name:'NeoN',
          host: true,
          ready:true,
        },
        {
          name:'Hailel',
          host: false,
          ready:false,
        },
        {
          name:'Valgarite',
          host: false,
          ready:false,
        },
        {
          name:'Blizzard',
          host: false,
          ready:true,
        },
        {
          name:'Chucuclir',
          host: false,
          ready:true,
        },
        {
          name:'Lzym',
          host: false,
          ready:false,
        },
        {
          name:'Chivo',
          host: false,
          ready:false,
        },
        {
          name:'Kong',
          host: false,
          ready:false,
        },
      ],
      messages:['asdf','a56f8aw44','pioqnoperinv','asda864ref','asvwervdf','awervtbwsdf','asvrwdf','asdfwtbw','asdf2545','asdfasdfasdf'],
    }
  },
  created() {
    this.isHost = this.store.isHost
  },
  mounted() {
    
  },
  methods: {
    sendTo(route: string){
      this.$router.push(route)
    },
    removeHost(){
      if(this.isHost) this.store.isHost = false
    }
  },
})

</script>

<style lang="scss">
@import '../assets/styles/customView.scss'
</style>
