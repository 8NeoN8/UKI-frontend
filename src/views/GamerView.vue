<template>
  <div class="game-container flex center-content container">
    <canvas 
      id="myCanvas"
      width="900"
      height="900"
      ref="canvas"
    ></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { userStore } from '@/stores/user';
import { ref } from 'vue'

//Define canvas element reference for typescript specifically 
const canvasElement = ref<HTMLCanvasElement>()

export default defineComponent({
  name:'GameView',
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
      //make the variable have the htmlcanvaslement type because otherwise it screams at me
      canvas: canvasElement,
        
    }
  },
  computed:{
    Store(){
      return userStore().user;
    },
    ctx(){
      if (this.canvas) {
        return this.canvas.getContext('2d')
      }
    }
  },
  mounted() {
    this.getCanvas() 
    if(this.canvas){
      this.canvas.addEventListener('click',(e) => {
        this.handleCanvasClick(e)
      },false)

      /* this.canvas.addEventListener('mousemove',(e) => {
        this.getMousePos(e)
      },false) */
    }

  },
  methods: {
    getCanvas(){
      const cnv = document.querySelector('canvas')
      
      if(cnv){
        this.canvas = cnv

        if(this.ctx){
          let minHeight = 600

          if( 
            window.innerHeight > minHeight && 
            window.innerHeight - 100 > minHeight
          ){
            this.ctx.canvas.height = window.innerHeight - 100
            this.ctx.canvas.width = this.ctx.canvas.height
          }else{
            this.ctx.canvas.height = minHeight
            this.ctx.canvas.width = minHeight
          }
        }
      }
      this.draw()
    },
    draw(){
      if (this.ctx) {
        this.ctx.rect(200, 200, 150, 50);
        this.ctx.fillStyle = '#ff0000';
        this.ctx.fill();
      }
    },
    handleCanvasClick(e: Event):any{
      e.preventDefault();
      console.log('click', this.getMousePos(e));
    },
    getMousePos(evt: any) {
      let c = this.canvas
      if(c){
        var rect = c.getBoundingClientRect();
        //console.log(Math.floor(evt.clientX - rect.left), Math.floor(evt.clientY - rect.top));
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        }
      }
    },
  },
})

</script>

<style lang="scss">
#myCanvas{
  background-color: cyan;
  
}
</style>