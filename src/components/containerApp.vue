<template>
  <div>
    <header>
      <h1 class="white">Akia</h1>
    </header>
    <div class="container-cartes"  v-if="!popup" >
      <cartes-addon  v-for="item in listAddon" :key="item.name" :Item="JSON.stringify(item) "></cartes-addon>
    </div>
    <div class="launcher">
      <h2>Launcher</h2>
      <p>J'avais créer ce launcher car je n'arrivais pas à publier sur Curseforge à l'époque.</p>
      <p>Vous pouvez le télécharger si vous voulez les mises à jours des addons mineurs</p>
      <p>Lorsqu'il y a de grosses fonctionnalités, celles-ci sont mises sur Curseforge</p>
      <br>
      <a :href="downloadLink" download="akia-launcher.zip">Télécharger le launcher d'addons</a>
    </div>
  
  </div>
</template>

<script>
import CartesAddon from './cartesAddon.vue'
import router from "@/router";
// import PopupAddon from './popupAddon/popupAddon.vue'
import {listeAddon} from '@/functions/help'
export default {
  name: 'containerApp',
  props: {
    msg: String
  }, 
  data() {
    return {
       downloadLink:  process.env.BASE_URL + "akia-launcher.zip",
       popup:false,
       listAddon: listeAddon,
       addon:null,
       checked:false,
       items:[
       {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            router.push('/addon?a=Summoned+mount');
        }
    },
       ]
    }
  },
   methods: {
    handleClosePopup(){
      this.popup = false
    }
  },
  components: {
    CartesAddon,
  }
}

</script>

<style scoped>
.container-cartes{
  display: flex;
  width: 90%;
  margin: 2em auto 0;
  flex-direction: column;
  justify-content: space-between;
}
.container-button{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1{text-align: center;}

header{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(65, 64, 64);
  height: 15vh;
}

a {
  border: 1px solid rgb(249, 248, 248);
  background: rgb(90, 89, 89);
  padding: 15px;
  border-radius: 7px;
  color: rgb(255, 255, 255);
  text-align: center;
  font-weight: 600;
  text-decoration: none;
  font-size: 20px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
a:hover{
  background: rgb(141, 16, 74);
}

.launcher{
  width: 90%;
  margin: 4em auto 0;
  padding-bottom: 2em ;
}

.white{
  color: white;
}

@media (min-width: 1000px) {
  .container-cartes{
    margin: 10em auto 0;
    flex-direction: row;
    width: 70%;
  }
  a{width: 20%;}
}
</style>
