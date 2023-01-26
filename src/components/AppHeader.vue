<script>
import axios from 'axios';
import SearchContent from './SearchContent.vue';
export default {
    components: { SearchContent },

    methods: {
        fetchChoosenMovies() {
            axios.get(() => {

            })
        }
    }
}
</script>

<template>
    <search-content></search-content>
</template>

<style>

</style>