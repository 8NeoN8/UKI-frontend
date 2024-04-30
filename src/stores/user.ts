import { defineStore } from 'pinia'

export const userStore = defineStore('userStore', {
  state: () => {
    return {
      user: '',
      userImg: 'https://i.ibb.co/sgWYQ0F/tanya.jpg',
      isHost:false,
    }
  }

})
