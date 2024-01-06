<template>
  <div class="container-carte">
    <h2>{{addon.name}}</h2>
    <img :src="imagePath" alt="">
    <button @click="openPopup()">Détail</button>
  </div>
</template>

<script>
import router from "@/router";
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
    display: flex;
    flex-direction: column;
    width: 100%;
    background: rgb(241, 206, 211);
    padding: 10px;
    border-radius: 7px;
    margin-bottom: 2em ;
}
h2{
    color: rgb(65, 64, 64);
    text-align: center;
    margin-bottom: 0.5em;
    font-family: 'Varela Round', sans-serif;
}
img{
  width: 100%;
  height: 300px;
  object-fit: cover;
}

button{
    margin-top: 2em;
    padding: 10px;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    align-self: flex-end;
    font-family: 'Varela Round', sans-serif;
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
