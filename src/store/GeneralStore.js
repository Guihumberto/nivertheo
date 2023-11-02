import { defineStore } from "pinia";

export const useGeneralStore = defineStore("general", {
  state: () => ({
    charlie: false,
    confirm: true
  }),
  getters: {
    readCharlie() {
      return this.charlie
    },
    readConfirm() {
      return this.confirm
    },
  },
  actions:{
    changeCharlie(value) {
      this.charlie = value
    },
    changeConfirm(value) {
      this.confirm = value
    }
  }
});
