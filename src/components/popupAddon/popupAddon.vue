<template>
  <div class="container-popup">
    <div class="close">
      <span class="closeButton" @click="back">🠔 Retour</span>
    </div>
    
    <h2>{{addon.name}}</h2>
    <div class="container-description">
      <div class="container-gauche">
        <img  class="miniature" :src="imageURL" alt="">
        <div class="container-all-image">
          <img class="small-image" v-for="(item2, index) in listImage" :key="item2" :src="imagePath2(item2)" @click="this.selectedImage = item2" alt="" :id="index">
        </div>
      </div>
      <div class="container-droite">
        <div class="container-github" @click="gitHub()">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> 
          <span>Liens vers le projet</span>
        </div> 

        <div class="container-github" @click="curseforge()">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 53.5"><path d="M0 6.9082l27.9532.0756L26.269 0h73.7449l-.0164 8.1433C87.5 10.6348 78.6726 16.775 74.825 36.34H72.046l-1.5815 4.359h2.3079l3.9906 12.8087H37.961l3.9184-12.8086h2.325l-1.6467-4.359h-2.7642l-5.1516-13.7535C13.5203 21.3437 2.6748 16.9042 0 6.9082zM58.6772 39.062c-3.082-5.6216-5.1058-1.197-11.4454-6.9496-2.4727-2.2436-3.4588-8.8199 2.097-10.8301-2.5255 5.5749 4.0297 7.8558 5.5898 4.6685.709-1.4486 1.6039-4.1204-.9798-5.9518-1.392-.9867-1.9281-3.9125-.7364-5.5388.3837 1.2093 1.5938 2.5013 3.916 1.5411-4.9192-8.1404 2.934-10.9457 6.7104-10.5817-3.9686.441-6.025 3.977-4.2196 7.8269 1.15 2.452 2.9006 3.6589 3.4097 5.6657-1.6952.1263-2.1852.9065-2.1495 2.362.0268 1.0895 2.5496 2.6646 2.9494-.4456 1.175 2.4245-.2407 3.8496-1.0129 4.9984-1.7824 2.6515-.1036 5.4107 2.1097 3.3067.9547-.9074 1.6155-2.5812.4048-5.318 2.229 1.776 4.5057 6.5447.9079 10.677-1.756 2.017-6.9514 1.391-7.551 4.5693z"/></svg>
          <span>Téléchargez l'addon</span>
        </div>
        <br><br>
        <div class="description-addon" v-html="addon.description"></div>
        <br>
        <br>
      </div> 
    </div>
    
  </div>
</template>

<script>
import { listeAddon } from '@/functions/help';
import router from '@/router';
export default {
  name: 'popupAddon', 
  data() {
   return {
    addon:null,
    selectedImage : null,
    listImage:null,
    imageURL : null,
    timeChangeImage:null,
    previousImage:null,
  }
  },
  methods:{
    back(){
      router.push({name:'home'})
    },
    imagePath2(item){
      return require('../../assets/' + item);
    },
    gitHub(){
      window.open(this.addon.lienGitHub, '_blank');
    },

    curseforge(){
      window.open(this.addon.lienCurseforge, '_blank');
    },
    changeImageCaroussel(){
      const tableauLong = this.listImage.length;
      const selectedImage = this.selectedImage;
      const list = this.listImage;
      let indexImage = list.findIndex(image => image === selectedImage)
      if(indexImage !== tableauLong-1){
        this.selectedImage = this.listImage[indexImage+1]
      }else{
       this.selectedImage = this.listImage[0]
      }
    },

    getData(name){
      listeAddon.forEach(element => {
        if(element.name === name){
          console.log('ouiii')
          this.addon = element
        }
      })
    }
  },
    computed: {
  },
    beforeMount() {
    const name = this.$route.query.a;
    this.getData(name)
    console.log(this.addon)
    this.selectedImage = this.addon.image;
    this.listImage = this.addon.carroussel;
    this.imageURL = require('../../assets/' + this.selectedImage)
    this.timeChangeImage = setInterval(function () { this.changeImageCaroussel() }.bind(this), 5000)
  },

  watch: {
    selectedImage:function() {
      this.imageURL=  require('../../assets/' +this.selectedImage)
      clearInterval(this.timeChangeImage)
      this.timeChangeImage = setInterval(function () { this.changeImageCaroussel() }.bind(this), 5000)
      const list = this.listImage;
      const selectedImage = this.selectedImage;
      const previousImage = this.previousImage;


      this.$nextTick(() => {
        if(previousImage){
          previousImage.classList.remove('contour')
        }
  
       const newIndexImage = list.findIndex(image => image === selectedImage)
       const newImage =  document.getElementById(newIndexImage)
       newImage.classList.add("contour")
       this.previousImage = newImage;
      });

    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./style.css">


</style>
