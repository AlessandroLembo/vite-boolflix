<script>
import axios from 'axios';
import SearchContent from './SearchContent.vue';
export default {
    components: { SearchContent },

    methods: {
        fetchChoosenMovies() {
            // axios.get(() => {

            // })
            console.log('ciao');
        }
    }
}
</script>

<template>
    <search-content @start-research="fetchChoosenMovies()"></search-content>
</template>

<style>

</style>