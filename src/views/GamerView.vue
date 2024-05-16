<template>
  <div class="game-container container test-bg-red">
    
    Cartas en mano: {{ playerCards.length }}
    <br>
    <br>
    <br>
    <div class="player-hand flex flex center">
      <template v-for="(card, index) in playerCards" :key="index">
        <PlayerCard :cardOwner="card.cardOwner" :cardValue="card.cardValue" :cardType="card.cardType" :style="`left: ${index*40}px`" @mouseover="test($event)"></PlayerCard>
      </template>
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { userStore } from '@/stores/user';
//import GameBoard from '@/components/GameBoard.vue';
//import MatchDeck from '@/components/MatchDeck.vue';
import PlayerCard from '@/components/PlayerCard.vue';

export default defineComponent({
  name:'GameView',
  components:{
    //GameBoard,
    //MatchDeck,
    PlayerCard
  },
  data() {
    return {
      players:[
        {
          name:'NeoN',
          host: true,
          ready:false,
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
      playerCards:[
        {
          cardOwner:'NeoN',
          cardValue:'4',
          cardType:'number'
        },
        {
          cardOwner:'NeoN',
          cardValue:'4',
          cardType:'number'
        },
        {
          cardOwner:'NeoN',
          cardValue:'4',
          cardType:'number'
        },
        {
          cardOwner:'NeoN',
          cardValue:'4',
          cardType:'number'
        },
        {
          cardOwner:'NeoN',
          cardValue:'4',
          cardType:'number'
        },
        {
          cardOwner:'NeoN',
          cardValue:'4',
          cardType:'number'
        },
        {
          cardOwner:'NeoN',
          cardValue:'4',
          cardType:'number'
        },
        {
          cardOwner:'NeoN',
          cardValue:'4',
          cardType:'number'
        },
        {
          cardOwner:'NeoN',
          cardValue:'4',
          cardType:'number'
        },
        {
          cardOwner:'NeoN',
          cardValue:'4',
          cardType:'number'
        },
        {
          cardOwner:'NeoN',
          cardValue:'4',
          cardType:'number'
        },
        {
          cardOwner:'NeoN',
          cardValue:'4',
          cardType:'number'
        },
        {
          cardOwner:'NeoN',
          cardValue:'4',
          cardType:'number'
        },
        {
          cardOwner:'NeoN',
          cardValue:'4',
          cardType:'number'
        },
        {
          cardOwner:'NeoN',
          cardValue:'4',
          cardType:'number'
        },
        {
          cardOwner:'NeoN',
          cardValue:'4',
          cardType:'number'
        },
        {
          cardOwner:'NeoN',
          cardValue:'4',
          cardType:'number'
        },
        {
          cardOwner:'NeoN',
          cardValue:'4',
          cardType:'number'
        },
        {
          cardOwner:'NeoN',
          cardValue:'4',
          cardType:'number'
        },
        {
          cardOwner:'NeoN',
          cardValue:'4',
          cardType:'number'
        },
        
      ]
    }
  },
  computed:{
    userStore(){
      return userStore();
    },

  },
  mounted() {

  },
  methods: {
    test(e:any){
      //console.log(e);
    }
  },
})

</script>

<style lang="scss">
@import '../assets/styles/globalStyles.scss'
</style>