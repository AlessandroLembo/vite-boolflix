<script>
import axios from 'axios';
import { baseUri } from './data';
import { apiKey } from './data';
import { store } from './data/store.js';
import AppHeader from './components/AppHeader.vue';

export default {
    name: 'App',
    components: { AppHeader },
    data() {
        return {
            store,
            // movies: [],
            // series: [],
            // baseUri: 'https://api.themoviedb.org/3/',
            // apiKey: 'dd9b1073e48ec92b6d25fb7c351682de'
        }
    },
    methods: {
        getFilteredContent(content) {
            axios.get(`${baseUri}/search/movie?api_key=${apiKey}&query=${content}&language=IT-it`)
                .then((res) => {
                    store.movies = res.data.results
                })
            axios.get(`${baseUri}/search/tv?api_key=${apiKey}&query=${content}&language=IT-it`)
                .then((res) => {
                    store.series = res.data.results
                })

        }
    }

}
</script>

<template>
    <app-header @filter-content="getFilteredContent"></app-header>
    <font-awesome-icon icon="fa-solid fa-star" />
    <ul>
        <li v-for="movie in store.movies" :key="movie.id">
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
        <li v-for="serie in store.series" :key="serie.id">
            <h1> {{ serie.name }} </h1>

        </li>
    </ul>

</template>

<style lang="scss">

</style>