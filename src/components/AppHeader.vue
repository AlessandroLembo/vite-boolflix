<script>
import axios from 'axios';
import SearchContent from './SearchContent.vue';
export default {
    components: { SearchContent },
    data() {
        return {
            movies: [],
            baseUri: 'https://api.themoviedb.org/3/',
            apiKey: 'dd9b1073e48ec92b6d25fb7c351682de'
        }
    },
    methods: {
        fetchChoosenMovies(item) {
            axios.get(`${this.baseUri}/search/movie?api_key=${this.apiKey}&query=${item}&language=IT-it`)
                .then((res) => {
                    this.movies = res.data.results
                })
        },

    },

}
</script>

<template>
    <search-content @start-research="fetchChoosenMovies"></search-content>
    <ul>
        <li v-for="movie in movies" :key="movie.id">
            <h1> {{ movie.original_title }} </h1>
            <p> {{ movie.title }} </p>
            <p> {{ movie.original_language }} </p>
            <p> {{ movie.vote_average }} </p>
        </li>
    </ul>
</template>

<style>

</style>