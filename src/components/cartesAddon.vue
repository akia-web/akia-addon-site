<template>
  <!-- <div class="container-carte">
    <h2></h2>
    <Image :src="imagePath" alt="Image" preview />
    <Button label="Détail" outlined @click="openPopup()" />
  </div> -->

  <Card class="container-carte">
    <template #title> <h2>{{addon.name}} </h2></template>
    <template #content>
      <Image :src="imagePath" alt="Image" preview />
      
    </template>
    <template #footer>
      <div class="content-footer">
        <Button label="Détail" outlined @click="openPopup()" />
      </div>
      
    </template>
</Card>
</template>

<script>
import router from "@/router";
import Button from 'primevue/button';
import Image from 'primevue/image';
import Card from 'primevue/card';
export default {
  name: 'cartesAddons',
  props: {
    Item: String,
  }, 
    data() {
    return {
       popup:  false, 
       addon:JSON.parse(this.Item)
    }
  },
  components: {
    Button,
    Image,
    Card
  },

  computed: {
    imagePath() {
      return require('../assets/' + this.addon.image);
    }

  },
  methods:{
    openPopup(){
      console.log(JSON.stringify(this.addon))
      router.push(
        {
          name:'popupAddon', 
          query:{
            a: this.addon.name
          }
        }
      );
    }
  },
}

</script>

<style scoped>

.container-carte{
    background: rgb(241, 206, 211);
    padding: 10px 5px;
    margin-bottom: 2em;
}
h2{
    /* color: rgb(65, 64, 64); */
    color:#9d2a5f;
    text-align: center;
    margin-bottom: 10px;
    padding: 15px;
    font-family: 'Varela Round', sans-serif;
    border: 2px dotted rgb(241, 206, 211);
    background: white;
}

:deep(.p-image-preview-container>img){
  width: 100%;
  height: 300px;
  object-fit: cover;
}

:deep(span.p-image.p-component.p-image-preview-container){
  width: 100%;
 
}
.content-footer{
  display: flex;
  flex-direction: row-reverse;
}
button{
    margin-top: 2em;
    padding: 10px;
    cursor: pointer;
    align-self: flex-end;
    background: white;
    transition: 0.2s ease-in-out;
}

button:hover{
  background: rgb(141, 16, 74);
  color: white;
  font-weight: 800;
}
@media (min-width: 1000px) {
.container-carte{
  width: 45%;
}

  a{width: 20%;}
}
</style>
