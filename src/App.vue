<script>
import axios from 'axios';
import { api } from '.data';
import { store } from './data/store.js';
import AppHeader from './components/AppHeader.vue';
import ProdCard from './components/ProdCard.vue';

export default {
    name: 'App',
    components: { AppHeader, ProdCard },
    data() {
        return {
            store,
            contentFilter: ''

        }
    },

    computed: {
        axiosConfig() {
            const { key, language } = api;
            return {
                params: {
                    api_key: key,
                    query: this.contentFilter,
                    language: language
                }
            }
        }
    },

    methods: {

        onContentFilterChange(prod) {
            this.titleFilter = prod
        },

        fetchFilteredContent(content) {
            // store.isLoading = true;
            if (!content) {
                store.movies = [];
                store.series = [];
                return;
            }

            this.fetchApi('search/movie', 'movies');
            this.fetchApi('search/tv', 'series')

        },

        fetchApi(endpoint, product) {
            axios.get(`${api.baseUri}/${endpoint}`, this.axiosConfig)
                .then((res) => {
                    store[product] = res.data.results
                }).catch(err => { console.error(err) })
                .then(() => { store.isLoading = false });

        }

    }
}

</script>

<template>
    <app-header @word-change="onContentFilterChange" placeholder="Search content"
        @start-research="fetchFilteredContent"></app-header>
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

</template>

<style>

</style>