import { defineStore } from 'pinia'

export const userStore = defineStore('userStore', {
  state: () => {
    return {
      userData: {
        name: '',
        Pfp: '',
        isHost: false,
      },
      userName: '',
      userPfp: 'https://i.ibb.co/sgWYQ0F/tanya.jpg',
      testImg: 'https://cf.geekdo-images.com/yglLYxKLFHdSVakjUaChpQ__opengraph/img/x7RYCqhV9yd_ilzPZ4Q1WUwWQt8=/0x475:950x974/fit-in/1200x630/filters:strip_icc()/pic4652900.png',
      isHost:false,
    }
  }
})
