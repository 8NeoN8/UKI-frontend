import { defineStore } from 'pinia'

type Message = {
  msgLobby: string,
  msgText: string,
  msgSender: string,
  msgDate: object
}

type State = {
  msgList: Message[]
}

export const messageStore = defineStore('messageStore', {
  state: (): State => ({
    msgList: [],
  }),
})
