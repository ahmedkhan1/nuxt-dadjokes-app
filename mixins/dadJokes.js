import { CONFIG } from "~/common/config";


export const fetchAllJokes = {
    methods: {
        async fetchJokeById() {
            if(this.$http){
                const config= {
                    headers:{
                      'Accept': 'application/json'
                    }
                };
                return await this.$http.get(`${CONFIG.api_url}/j/${this.$route.params.id}`,config);
            }
        },
        async searchJokes() {
            if(this.$http){
                const config= {
                    headers:{
                      'Accept': 'application/json'
                    }
                };
                return await this.$http.get(`${CONFIG.api_url}/search`, config);
            }
        }
    }
}
