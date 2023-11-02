<template>
  <v-app>
    <div class="wrapper">
      <div class="charlie">
        <img src="@/assets/charlie.png" />
      </div>
      <div class="title">
        <h1 class="text-center">Aniversário de 2 Anos do <br> Theodoro</h1>
      </div>
      <default-view />
    </div>
  </v-app>
</template>

<script setup>
  import DefaultView from './View.vue'
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

.title{
  position: absolute;
  top: 270px;
  width: 500px;
  z-index: 2;
  color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #661515;
  opacity: 0;
  animation: appear 5s ease forwards;
  animation-delay: 1.5s;
}

@keyframes flyTop {
  0%{
    transform: translateY(500px);
  }
  100%{
    transform: translateY(0);
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
