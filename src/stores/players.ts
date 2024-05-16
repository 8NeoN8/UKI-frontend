import { defineStore } from 'pinia'

export const playersStore = defineStore('playersStore', {
  state: () => {
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
    }
  }
})