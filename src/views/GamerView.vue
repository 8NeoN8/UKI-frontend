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
      isPressedDown: false,
      currentPos: {
        x:0,
        y:0
      } || undefined,
      squareObject:{
        x:0,
        y:0,
        w:0,
        h:0
      }
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
        this.isObjectClicked(this.getMousePos(e)!, this.squareObject)
      })
      this.canvas.addEventListener('mousedown',(e) => {
        console.log('down como yo');
      },false)

      this.canvas.addEventListener('mousemove',(e) => {
        if(this.isPressedDown){
          let newPos = this.getMousePos(e)
          if(newPos != this.currentPos){
            console.log(newPos);
            
            this.drawRect(newPos!.x,newPos!.y, 100,100)
          }
          this.currentPos = newPos!
        }
      },false)

      this.canvas.addEventListener('mouseup',(e) => {
        this.isPressedDown = false
      },false)
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
      this.drawRect(0,0,200,250)
    },
    isObjectClicked(mousePos: any, moveObject: any){
      let objectCorners = {
        topLeft: {x: moveObject.x, y: moveObject.y},
        topRight: {x:moveObject.x + moveObject.w, y: moveObject.y },
        bottomLeft: {x:moveObject.x, y: moveObject.y + moveObject.h},
        bottomRight: {x: moveObject.x + moveObject.w, y: moveObject.y + moveObject.h},
      }

      if(
        mousePos.x > objectCorners.topLeft.x &&
        mousePos.x < objectCorners.topRight.x &&
        mousePos.y > objectCorners.topLeft.y &&
        mousePos.y > objectCorners.bottomLeft.y
      ){
        console.log(mousePos, moveObject);
        this.isPressedDown = true
      }
    },
    drawRect(x: number, y: number, w: number, h: number){
      if (this.ctx) {
        this.ctx.clearRect(0,0,this.canvas!.width,this.canvas!.height)
        this.ctx.beginPath()
        this.ctx.rect(x, y, w, h);
        this.ctx.fillStyle = '#ff0000';
        this.ctx.fill();
        this.squareObject = {
          x: x,
          y: y,
          w: w,
          h: h 
        }
        console.log(this.squareObject);
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
            x: Math.floor(evt.clientX - rect.left),
            y: Math.floor(evt.clientY - rect.top)
        }
      }
    },
    handleMouseDown(initPos: any){
      
    }
  },
})

</script>

<style lang="scss">
#myCanvas{
  background-color: cyan;
  
}
</style>