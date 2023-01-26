<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';

export default {
    name: 'App',
    components: { AppHeader },
    data() {
        return {
            movies: [],
            series: [],
            baseUri: 'https://api.themoviedb.org/3/',
            apiKey: 'dd9b1073e48ec92b6d25fb7c351682de',
        }
    },
    methods: {
        getFilteredContent(content) {
            axios.get(`${this.baseUri}/search/movie?api_key=${this.apiKey}&query=${content}&language=IT-it`)
                .then((res) => {
                    this.movies = res.data.results
                });

            axios.get(`${this.baseUri}/search/tv?api_key=${this.apiKey}&query=${content}&language=IT-it`)
                .then((res) => {
                    this.series = res.data.results
                })

        }
    }

}
</script>

<template>
    <app-header @filter-content="getFilteredContent"></app-header>
    <ul>
        <li v-for="movie in movies" :key="movie.id">
            <h1> {{ movie.original_title }} </h1>
            <p v-if="movie.title !== movie.original_title"> {{ movie.title }} </p>
            <figure>
                <img v-if="movie.original_language === 'en'" src="./assets/flags/en.png" alt="en">
                <img v-else-if="movie.original_language === 'it'" src="./assets/flags/it.png" alt="it">
                <p v-else> {{ movie.original_language }} </p>
            </figure>
            <p> {{ movie.vote_average }} </p>

        </li>
    </ul>
    <ul>
        <li v-for="serie in series" :key="serie.id">
            <h1> {{ serie.name }} </h1>

        </li>
    </ul>

</template>

<style>

</style>