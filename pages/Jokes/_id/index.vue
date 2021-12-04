<template>
  <div class="joke-card">
    <p v-if="joke">{{ joke }}</p>
    <p v-else-if="noRecord">No record found</p>
  </div>
</template>

<script>
import { fetchAllJokes } from "~/mixins/dadJokes";

export default {
    scrollToTop: true,
    mixins: [fetchAllJokes],
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
    },
    validate({ params }) {
      // Must be a number
      if ((/^\d+$/.test(params.id))){
        throw new Error('Under Construction!')
      }else{
        return true;
      }
    },
    data(){
        return {
            joke: null,
            noRecord: false,
        }
    },
    async created(){
      try{
        this.noRecord = false;
        let result = await this.fetchJokeById();
        if(result && result.data.status && result.data.status === 200){
          this.joke = result.data.joke;
        }else{
          this.noRecord = true;
        }
      }catch(err){
        console.log(err);
      }
    },
}
</script>

<style scoped>

.joke-card{
  border: 1px solid #0000;
  background: #fff;
  padding: 10px;
  margin: 2px;
  box-shadow: 0px 0px 1px rgb(0 0 0);
}
</style>