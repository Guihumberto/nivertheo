<template>
  <v-app>
    <v-main class="container">
      <div class="title square">
        <h1 class="text-center">Aniversário do <br> <span><span class="theo">Theo</span>doro</span></h1>
      </div>
      <div :class=" generalStore.readCharlie ? 'charlieGo' : 'charlie'">
        <img :class="generalStore.readConfirm ? '': 'charlieHidden'" src="@/assets/charlie.png" @click="generalStore.changeCharlie(true)"/>
      </div>
      <router-view />
      <img class="snoop" :class="generalStore.readConfirm ? 'charlieHidden': ''" src="@/assets/snoop.png" />
    </v-main>
  </v-app>
</template>

<script setup>
  import { useGeneralStore } from '@/store/GeneralStore'
  const generalStore = useGeneralStore()
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  overflow-y: hidden;
  overflow-x:hidden;
}
html{
  overflow-y:hidden;
  overflow-x:hidden;
}
.container{
  position: relative;
  width: 100vw;
  height: 100vh;
  background: yellowgreen;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('https://static.vecteezy.com/ti/vetor-gratis/p1/9095888-cartoon-nuvem-no-ceu-azul-papel-corte-estilo-cartao-ilustracao-um-lote-de-nuvens-dia-de-sol-nuvens-criativo-papel-artesanal-estilo-ilustracao-gratis-vetor.jpg') no-repeat;
  background-size: cover;
  background-position: center;
}
.title{
  font-family: "Agbalumo", sans-serif;
  position: absolute;
  top: 0;
  margin-top: 50px;
  font-size: 2rem;
  line-height: 1.1;
  opacity: 0;
  animation: appear 5s ease forwards;
  animation-delay: 1.5s;
}
@keyframes appear {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
    -webkit-text-stroke-width: 4px;
    -webkit-text-stroke-color: #ffeb3b;
  }
}
.charlie{
  position: absolute;
  top: 150px;
  animation: flyTop 6s ease forwards;
  z-index: 1;
}

.charlieGo{
  position: absolute;
  top: 150px;
  animation: flyTopGo 6s ease forwards;
  z-index: 1;
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
@media (max-width: 570px){
  .title{
    margin-top: 10px;
    font-size: 1rem;
  }
  @keyframes appear {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #ffeb3b;
  }
  }
  .charlie{
    top: 60px;
  }
  .charlieGo{
    top: 60px;
  }
}
</style>
