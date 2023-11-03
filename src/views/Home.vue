<template>
   <div class="container" :class="date ? 'cont500' : 'cont100'">
     <div class="btn-box-open-confirm zigzag">
        <v-btn
          variant="outlined"
          color="white"
          @click="changeDate()"
        >
          <span class="textcc">Confirmar Presença</span>
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
       <v-btn @click="changeConfirm()">Confirmar</v-btn>
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
  import { useGeneralStore } from '@/store/GeneralStore'
  const generalStore = useGeneralStore()
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
    },
    methods:{
      changeDate(){
        this.date = !this.date
        generalStore.changeCharlie(this.date)
      },
      changeConfirm(){
        this.confirm = !this.confirm
        generalStore.changeConfirm(this.confirm)
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
.box {
  width: 800px;
  background: #000;
  border: solid 2px #000;
  padding: 10px;
  text-align: center;
  margin-top: 10px;
}
.zigzag {
  background: linear-gradient(125deg, #fdfc13 25%, transparent 25%) -50px 0,
        linear-gradient(-125deg, #fdfc13 25%, transparent 25%) -50px 0,
        linear-gradient(35deg, #fdfc13 25%, #000 25%),
        linear-gradient(-65deg, #fdfc13 25%, #000 25%);
    background-size: 100px 100px;
}
.textcc{
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fc1313;
  font-weight: 500;
}
</style>
