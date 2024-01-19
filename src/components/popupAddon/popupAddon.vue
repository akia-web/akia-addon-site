<template>
  <div class="container-popup">
    <div class="container-header">
      <div class="close">
        <span @click="back" class="material-symbols-outlined closeButton">cancel</span>
    </div>
    
    <h2>{{addon.name}}</h2>
    </div>
   
    <div class="container-description">
      <div class="container-gauche">

        <Galleria
            :value="listImage"
            :circular="true"
            :numVisible="2"
            :pt="{
                root: { style: { maxWidth: '700px', height:'600px' } }
            }"
        >
            <template #item="slotProps">
              <div v-if="slotProps.item.image.includes('https')">
                <iframe width="700" height="500" :src="slotProps.item.image" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <div v-if="!slotProps.item.image.includes('https')">
                <img :src="imagePath2(slotProps.item.image)" style="width: 100%; height: 500px; object-fit: cover;" />
              </div>
                <!-- <img :src="imagePath2(slotProps.item)" style="width: 100%; height: 500px; object-fit: cover;" /> -->
            </template>
            <template #thumbnail="slotProps">
                <img class="small-image" :src="imagePath2(slotProps.item.thumbnail)" :alt="slotProps.item.alt" />
            </template>
        </Galleria>

      </div>
      <div class="container-droite">
        <div class="container-github">        
          <svg xmlns="http://www.w3.org/2000/svg" 
          @click="curseforge()"
          viewBox="0 0 100 53.5">
          <path d="M0 6.9082l27.9532.0756L26.269 0h73.7449l-.0164 8.1433C87.5 10.6348 78.6726 16.775 74.825 36.34H72.046l-1.5815 4.359h2.3079l3.9906 12.8087H37.961l3.9184-12.8086h2.325l-1.6467-4.359h-2.7642l-5.1516-13.7535C13.5203 21.3437 2.6748 16.9042 0 6.9082zM58.6772 39.062c-3.082-5.6216-5.1058-1.197-11.4454-6.9496-2.4727-2.2436-3.4588-8.8199 2.097-10.8301-2.5255 5.5749 4.0297 7.8558 5.5898 4.6685.709-1.4486 1.6039-4.1204-.9798-5.9518-1.392-.9867-1.9281-3.9125-.7364-5.5388.3837 1.2093 1.5938 2.5013 3.916 1.5411-4.9192-8.1404 2.934-10.9457 6.7104-10.5817-3.9686.441-6.025 3.977-4.2196 7.8269 1.15 2.452 2.9006 3.6589 3.4097 5.6657-1.6952.1263-2.1852.9065-2.1495 2.362.0268 1.0895 2.5496 2.6646 2.9494-.4456 1.175 2.4245-.2407 3.8496-1.0129 4.9984-1.7824 2.6515-.1036 5.4107 2.1097 3.3067.9547-.9074 1.6155-2.5812.4048-5.318 2.229 1.776 4.5057 6.5447.9079 10.677-1.756 2.017-6.9514 1.391-7.551 4.5693z"/></svg>
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
import Galleria from 'primevue/galleria';
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
  components: {
    Galleria
  },
  methods:{
    back(){
      router.push({name:'home'})
    },
    imagePath2(item){
      if(item.includes('https')){
        return item
      }else{
        return require('../../assets/' + item)
      }
    },
    gitHub(){
      window.open(this.addon.lienGitHub, '_blank');
    },

    curseforge(){
      window.open(this.addon.lienCurseforge, '_blank');
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
    this.getData(this.$route.query.a)
    this.listImage = this.addon.carroussel
  },
    // mounted(){
    // PhotoService.getImages().then((data) => (this.listImage = data));
    // }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./style.css">


</style>
