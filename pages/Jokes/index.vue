<template>
  <div v-if="jokes">
    <Joke v-for="joke in jokes" :key="joke.id" :id="joke.id" :joke="joke.joke" />
  </div>
</template>

<script>
import Joke from "../../components/Jokes.vue";
import { fetchAllJokes } from "~/mixins/dadJokes";
import {CONFIG} from "~/common/config.js";

export default {
  mixins:[fetchAllJokes],
  components: {
    Joke  
  },
  data(){
    return {
      jokes: [],
      content: "",
    }
  },
  async asyncData({$axios}){
    try{
      const config= {
          headers:{
            'Accept': 'application/json'
          }
      };
      const result = await $axios.$get(`${CONFIG.api_url}/search`, config);
      if(result){
        return {
          content: result.results[0].joke,
          jokes: result.results,
        }
      }
    }catch(err){
      console.log(err);
    }
  },
  head(){
    return {
      title: 'Dad jokes',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.content
        },

        { property: "og:site_name", content: "Realade" },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://bobross.com",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "My Amazing Blog on The Joy of Painting",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.content
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://cityntownstorage.blob.core.windows.net/cityntown-dev-images/6180de837d77212e01deda8a%2FNanga-Parbat--Hiking_21122021104922320_Large.jpg"
        },
        { property: "og:image:width", content: "740" },
        { property: "og:image:height", content: "300" },
      ]
    }
  }
}
</script>

<style>

</style>