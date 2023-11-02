<template>
  <v-app>
    <div class="wrapper">
      <div :class=" generalStore.readCharlie ? 'charlieGo' : 'charlie'">
        <img src="@/assets/charlie.png" @click="generalStore.changeCharlie(true)"/>
      </div>
      <div class="title">
        <h1 class="text-center">Aniversário do <br> <span>Theodoro</span></h1>
      </div>
      <default-view />
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
  top: -30px;
  animation: flyTop 6s ease forwards;
  z-index: 1;
}

.charlieGo{
  position: absolute;
  top: -30px;
  animation: flyTopGo 6s ease forwards;
  z-index: 1;
}

.title{
  position: absolute;
  top: 0px;
  min-width: 300px;
  z-index: 2;
  opacity: 0;
  animation: appear 5s ease forwards;
  animation-delay: 1.5s;
}

.title h1 {
  font-family: "Agbalumo";
  letter-spacing: .1cap;
  color: rgb(226, 219, 176);
  -webkit-text-stroke-color: #000;
  line-height: 1.2;
}
.title h1 span {
  font-family: "Poppins", sans-serif;
  color: rgb(248, 224, 71);
  -webkit-text-stroke-width: .2px;
  -webkit-text-stroke-color: #000;
}

@keyframes flyTop {
  0%{
    transform: translateY(500px);
  }
  100%{
    transform: translateY(0);
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
