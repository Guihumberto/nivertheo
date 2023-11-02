<template>
   <div class="container" :class="date ? 'cont500' : 'cont100'">
     <div class="btn-box-open-confirm">
        <v-btn
          variant="outlined"
          color="white"
          @click="date = !date"
        >
          <v-icon
            size="22"
            color="success" class="mr-1">mdi-check-decagram</v-icon>
          Confirmar Presença
        </v-btn>
     </div>
     <div class="date-party" :class="!date ? 'd-none' : ''">
        <v-icon size="80" color="yellow">mdi-gift</v-icon>
        <div class="datehour">
          <p class="date">11/11</p>
          <p class="semana">Sábado</p>
          <p class="hour">a partir das 16hrs</p>
        </div>
     </div>
     <div
        class="confirm-box" :class="!date ? 'd-none' : ''"
        v-if="confirm"
      >
       <v-text-field
          class="form text-white"
          clearable
          label="Nome"
          variant="outlined"
          color="white"
        >
        </v-text-field>
        <v-text-field
          class="form text-white"
          clearable
          label="Qtd de Pessoas"
          placeholder="crianças e adultos"
          type="number"
          variant="outlined"
          color="white"
        >
        </v-text-field>
       <v-btn @click="confirm = !confirm">Confirmar</v-btn>
     </div>
     <div
      class="confirm-appears"
      v-else
     >
      <p class="font-weight-bold text-center mb-2">Confirmação enviada</p>
      <p>Endereço: Av. General Arthur Carvalho, 500,
        Na área de lazer do Cond Green Park Village, Turu, Casa 28,
        ao lado do motel aquarium <br>
      </p>
     </div>
   </div>
</template>

<script>
  export default {
    data(){
      return{
        date: false,
        confirm: true
      }
    },
    watch:{
      date(val){
        if(!val){
          this.confirm = true
        }
      }
    }
  }

</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 400px;
  background: rgba(255, 255, 255, .1);
  border: 2px solid rgba(255, 255, 255, .2);
  backdrop-filter: (30px);
  border-radius: 16px;
  padding: 30px 20px;
  transition: height 1s ease;
  transition-delay: .6s;
}
.cont100{
  height: 100px;
}
.cont500 {
  height: 550px;
}
.confirm-box {
  position: relative;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  opacity: 0;
  animation: slideTop 2s ease forwards;
  animation-delay: 1.5s;

}
.date-party {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: slideTop 2s ease forwards;
  animation-delay: 1.2s;
}
@keyframes slideTop {
  0%{
    opacity: 0;
    transform: translateY(100px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
.date-party .datehour{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.date{
  font-size: 30px;
  font-weight: 700;
  color: white;
  line-height: 2;
}
.semana{
  color: aliceblue;
  font-size: 15px;
}
.hour{
  color: aliceblue;
}
.form {
  width: 100%;
}
.confirm-appears{
  color: white;
  opacity: 0;
  animation: slideTop 2s ease forwards;
  animation-delay: .6s;
  border: 2px solid blue;
  border-radius: 16px;
  padding: 15px;
  background: rgb(226, 86, 86);
}
</style>
