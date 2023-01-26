<script>
import axios from 'axios';
import SearchContent from './SearchContent.vue';
export default {
    components: { SearchContent },
    data() {
        return {
            result: []
        }
    },
    methods: {
        fetchChoosenMovies(item) {
            axios.get(`{{baseUri}}/search/movie?api_key={{api_key}}&query=${item}&language=IT-it`)
                .then((res) => {
                    this.result = res.data.results
                })
            // console.log('ciao');
        }
    },

}
</script>

<template>
    <search-content @start-research="fetchChoosenMovies"></search-content>
</template>

<style>

</style>