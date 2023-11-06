<template>
  <div class="wrapperContent" :class="date ? 'cont500' : 'cont100'">
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

      v-if="confirm"
    >
    <v-form @submit.prevent="changeConfirm()" ref="form" class="confirm-box" :class="!date ? 'd-none' : ''">
      <v-text-field
        class="form"
        clearable
        label="Nome"
        variant="outlined"
        placeholder="Nome e sobrenome"
        v-model.trim="mailConfirm.name"
        :rules="[rules.required, rules.minname]"
      >
      </v-text-field>
      <v-text-field
        class="form my-2"
        clearable
        label="Qtd de Pessoas"
        placeholder="crianças e adultos"
        type="number"
        variant="outlined"
        v-model.number.trim="mailConfirm.qtd"
        :rules="[rules.required, rules.numvalid]"
      >
      </v-text-field>
      <v-btn type="submit" class="zigzag">Confirmar</v-btn>
    </v-form>
    </div>
    <div
      class="confirm-appears"
      v-else
    >
      <div v-if="!msgConfirm">
        <p class="font-weight-bold text-center mb-2">Confirmação enviada</p>
        <p>Endereço: Av. General Arthur Carvalho, 500,
          Na área de lazer do Cond Green Park Village, Turu, Casa 28,
          ao lado do motel aquarium. <a @click.prevent="copyAdress()" :class="copytext ? 'copiado' : 'copyadress'"> <v-icon class="mr-1" size="x-small">mdi-content-copy</v-icon>{{copytext ? 'Copiado' : 'Copiar'}}</a>
        </p>
        <div class="mt-5 text-center">
            <a class="linkgoogle" href="https://maps.app.goo.gl/v9TgTtmMcL8AgRGN8" target="_blank"> <v-icon size="small">mdi-google-maps</v-icon>Google Maps</a>
          </div>
      </div>
      <div v-else>
        <p>{{ msgConfirm }}</p>
      </div>
    </div>
  </div>
</template>

<script>
    import emailjs from 'emailjs-com';
    import { useGeneralStore } from '@/store/GeneralStore'
    const generalStore = useGeneralStore()
    export default {
    data(){
      return{
        date: false,
        copytext: false,
        confirm: true,
        msgConfirm: '',
        mailConfirm:{
          from: 'juninho.joao@hotmail.com',
          name: '',
          qtd: '',
          subject: "Confirmação Aniversário Theodoro"
        },
        rules:{
            required: (value) => !!value || "Campo obrigatório",
            numvalid: (v) => /[1, 2, 3, 4, 5]/.test(Number(v)) || "Máximo de 5 pessoas",
            minname: (v) => (v||'').length >= 4 || "Mínimo 4 caracteres",
        },
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
      async changeConfirm(){
        const { valid } = await this.$refs.form.validate()
        if(valid){
          this.confirm = !this.confirm
          generalStore.changeConfirm(this.confirm)

          const USER_ID = 'yYmVkZwwUEpuiuYFQ' ;
          const SERVICE_ID = 'service_cxu6jof';
          const TEMPLATE_ID = 'template_4tutf6g';

          const emailParams = {
            to_email: this.mailConfirm.from,
            subject: this.mailConfirm.subject,
            message: `Nome: ${this.mailConfirm.name} com o número de ${this.mailConfirm.qtd} Convidados`,
          };

          emailjs.send(SERVICE_ID, TEMPLATE_ID, emailParams, USER_ID).then(
            (response) => {
              console.log('Email sent successfully', response);
              this.mailConfirm.name = ''
              this.mailConfirm.qtd - ''
            },
            (error) => {
              console.error('Email sending failed', error);
              this.msgConfirm = "Erro!! Sua confirmação falhou"
            }
          );
        }
      },
      copyAdress(){
        this.copytext = !this.copytext
        const text = "Endereço: Av. General Arthur Carvalho, 500, Na área de lazer do Cond Green Park Village, Turu, Casa 28, ao lado do motel aquarium."
        navigator.clipboard.writeText(text);
      }
    }
  }
</script>

<style lang="scss" scoped>
.wrapperContent{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 400px;
  background: rgba(255, 255, 255, .1);
  border: 2px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(5px);
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
  font-size: 40px;
  font-weight: 700;
  color: rgb(20, 19, 19);
  line-height: 2;
}
.semana{
  color: rgb(18, 18, 19);
  font-size: 25px;
  font-weight: 700;
}
.hour{
  color: rgb(26, 27, 29);
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
  background: #fdfc13,
}
.textcc{
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fc1313;
  font-weight: 500;
}
@media (max-width: 570px){
  .wrapperContent{
    width: 380px;
    padding: 20px 10px;
  }
  .cont500 {
    height: 500px;
  }
}
.linkgoogle{
  text-decoration: none;
  border: 1px solid #fff;
  border-radius: 16px;
  padding: 5px 10px;
  color: #fff;
  font-size: 15px;
  transition: 1s ease;
}
.linkgoogle:hover{
  color: #fc1313;
  border: 1px solid #fc1313;
  background: white;
}
.copyadress{
  color: yellow;
  transition: 1s ease;
  font-size: 15px;
}
.copiado {
  color: greenyellow;
  transition: 1s ease;
  font-size: 17px;
}
.copyadress:hover{
  color: #e2dada;
}
</style>
