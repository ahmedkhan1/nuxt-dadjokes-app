<template>
  <div>
      <Joke v-for="joke in jokes" :key="joke.id" :id="joke.id" :joke="joke.joke" />
  </div>
</template>

<script>
import Joke from "../../components/Jokes.vue";
import { fetchAllJokes } from "~/mixins/dadJokes";

export default {
    mixins:[fetchAllJokes],
    components: {
      Joke  
    },
    data(){
      return {
        jokes: [],
      }
    },
    async created(){
      try{
        let result = await this.searchJokes();
        if(result){
          this.jokes = result.data.results;
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
                    content: 'Best place for corny dad jokes'
                }
            ]
        }
    }
}
</script>

<style>

</style>