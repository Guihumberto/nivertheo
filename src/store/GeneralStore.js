import { defineStore } from "pinia";

export const useGeneralStore = defineStore("general", {
  state: () => ({
    charlie: false,
  }),
  getters: {
    readCharlie() {
      return this.charlie
    },
  },
  actions:{
    changeCharlie(value) {
      this.charlie = value
    }
  }
});
