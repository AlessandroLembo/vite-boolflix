<script>
import axios from 'axios';
import { api } from '.data';
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

            fetchApi: {
                searchMovies: 'search/movies',
                movies: 'movies',
                searchSeries: 'search/tv',
                series: 'series'
            },

        }
    },
    methods: {

        getFilteredContent(content) {
            store.isLoading = true;
            if (!content) {
                store.movies = [];
                store.series = [];
            } else {
                axios.get(`${baseUri}/search/movie?api_key=${apiKey}&query=${content}&language=IT-it`)
                    .then((res) => {
                        store.movies = res.data.results
                    }).catch(err => { console.error(err) })
                    .then(() => { store.isLoading = false });
                axios.get(`${baseUri}/search/tv?api_key=${apiKey}&query=${content}&language=IT-it`)
                    .then((res) => {
                        store.series = res.data.results
                    }).catch(err => { console.error(err) })
                    .then(() => { store.isLoading = false });
                // axios.get(`${baseUri}/search/tv?api_key=${apiKey}&query=${content}&language=IT-it`)
                //     .then((res) => {
                //         store.series = res.data.results
                //     }).catch(err => { console.error(err) })
                //     .then(() => { store.isLoading = false })
            }

        }
    }
}

</script>

<template>
    <app-header @filter-content="getFilteredContent"></app-header>
    <h1>MOVIES</h1>
    <ul v-for="movie in store.movies" :key="movie.id">
        <li>LISTA</li>
        <li>{{ movie.original_title }}</li>
        <li v-if="movie.title !== movie.original_title">{{ movie.title }}</li>
        <li>
            <figure>
                <img v-if="movie.original_language === 'en'" src="./assets/flags/en.png" alt="en">
                <img v-else-if="movie.original_language === 'it'" src="./assets/flags/it.png" alt="it">
                <p v-else> {{ movie.original_language }} </p>
            </figure>
        </li>
        <li>{{ movie.vote_average }}</li>
    </ul>

    <h1>SERIE TV</h1>
    <ul v-for="serie in store.series" :key="serie.id">
        <li>LISTA</li>
        <li>{{ serie.original_name }} </li>
        <li v-if="serie.name !== serie.original_name"> {{ serie.name }} </li>
        <li>
            <figure>
                <img v-if="serie.original_language === 'en'" src="./assets/flags/en.png" alt="en">
                <img v-else-if="serie.original_language === 'it'" src="./assets/flags/it.png" alt="it">
                <p v-else> {{ serie.original_language }} </p>
            </figure>
        </li>
        <li>{{ serie.vote_average }}</li>
    </ul>

</template>

<style>

</style>