<script>
import axios from 'axios';
import SearchContent from './SearchContent.vue';
export default {
    components: { SearchContent },
    data() {
        return {
            movies: [],
            baseUri: 'https://api.themoviedb.org/3/',
            apiKey: 'dd9b1073e48ec92b6d25fb7c351682de',
            index: 0
        }
    },

    methods: {
        fetchChoosenMovies(item) {
            axios.get(`${this.baseUri}/search/movie?api_key=${this.apiKey}&query=${item}&language=IT-it`)
                .then((res) => {
                    this.movies = res.data.results
                    this.getFlagString(i);
                })
        },



    },

}
</script>

<template>
    <search-content @start-research="fetchChoosenMovies"></search-content>
    <ul>
        <li v-for="(movie, i) in movies" :key="movie.id">
            <h1> {{ movie.original_title }} </h1>
            <p v-if="movie.title !== movie.original_title"> {{ movie.title }} </p>
            <figure>
                <img v-if="movie.original_language === 'en'" src="../assets/flags/en.png" alt="en">
                <img v-else-if="movie.original_language === 'it'" src="../assets/flags/it.png" alt="it">
                <p v-else> {{ movie.original_language }} </p>
            </figure>
            <p> {{ movie.vote_average }} </p>

        </li>
    </ul>
</template>

<style>

</style>