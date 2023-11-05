<template>
  <v-app>
    <div class="wrapper">
      <div :class=" generalStore.readCharlie ? 'charlieGo' : 'charlie'">
        <img :class="generalStore.readConfirm ? '': 'charlieHidden'" src="@/assets/charlie.png" @click="generalStore.changeCharlie(true)"/>
      </div>
      <div class="title square">
        <h1 class="text-center">Aniversário do <br> <span><span class="theo">Theo</span>doro</span></h1>
      </div>
      <default-view />
      <img class="snoop" :class="generalStore.readConfirm ? 'charlieHidden': ''" src="@/assets/snoop.png" />
    </div>
  </v-app>
</template>

<script setup>
  import DefaultView from './View.vue'
  import { useGeneralStore } from '@/store/GeneralStore'
  const generalStore = useGeneralStore()
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  background: skyblue;

}
.wrapper{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: skyblue;
}
.charlie{
  position: absolute;
  top: 30px;
  animation: flyTop 6s ease forwards;
  z-index: 1;
}

.charlieGo{
  position: absolute;
  top: -30px;
  animation: flyTopGo 6s ease forwards;
  z-index: 1;
}
.square{
  border: 2px solid #000;
  margin-top: 2px;
  border-radius: 16px;
  background: rgba(8, 8, 8, 0.1);
  border: 2px solid rgba(255, 255, 255, .2);
  backdrop-filter: (30px);
}

.title{
  position: absolute;
  top: 0;
  min-width: 300px;
  z-index: 2;
  opacity: 0;
  animation: appear 5s ease forwards;
  animation-delay: 1.5s;
}

.title h1 {
  font-family: "Agbalumo";
  letter-spacing: .1cap;
  font-size: 20px;
  color: rgb(226, 219, 176);
  -webkit-text-stroke-color: #000;
  line-height: 1.2;
}
.title h1 span {
  font-family: "Poppins", sans-serif;
  font-size: 40px;
  color: rgb(63, 63, 60);
  -webkit-text-stroke-width: .2px;
  -webkit-text-stroke-color: #cfe081;
}
.title h1 span .theo{
  color: rgb(63, 63, 60);
  animation: theo 5s ease forwards;
  animation-delay: 3.5s;
}
.charlieHidden{
  display: none;
}

.snoop {
  visibility: hidden;
  position: absolute;
  right: -1800px;
  animation: snoop 5s ease forwards;
  animation-delay: 1.5s;
}

@keyframes theo {
  0%{
    color: rgb(63, 63, 60);
  }
  50%{
    color: red;
    text-shadow: red 1px 0 10px;
  }
  100%{
    color: rgb(63, 63, 60);
  }
}

@keyframes flyTop {
  0%{
    transform: translateY(500px);
  }
  100%{
    transform: translateY(0);
  }
}

@keyframes snoop {
  0%{
    visibility: visible;
    transform: translateX(-2800px);
  }
  50%{
    transform: translateX(-1600px);
  }
  90%{
    transform: translateX(0);
  }
  100%{
    display: none;
  }
}
@keyframes flyTopGo {
  0%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(400px);
  }
  100%{
    transform: translateY(-500px);
  }
}

@keyframes appear {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

</style>
