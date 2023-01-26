<script>
import axios from 'axios';
import SearchContent from './SearchContent.vue';
export default {
    components: { SearchContent },
    data() {
        return {
            result: [],
            baseUri: 'https://api.themoviedb.org/3/',
            apiKey: 'dd9b1073e48ec92b6d25fb7c351682de'
        }
    },
    methods: {
        fetchChoosenMovies(item) {
            axios.get(`${this.baseUri}/search/movie?api_key=${this.apiKey}&query=${item}&language=IT-it`)
                .then((res) => {
                    this.result = res.data.results
                })
        }
    },

}
</script>

<template>
    <search-content @start-research="fetchChoosenMovies"></search-content>
</template>

<style>

</style>