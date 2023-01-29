<script>
import axios from 'axios';
import { api } from './data';
import { store } from './data/store.js';
import AppHeader from './components/AppHeader.vue';
import ProdCard from './components/ProdCard.vue';

export default {
    name: 'App',
    components: { AppHeader, ProdCard },
    data() {
        return {
            store,
            titleFilter: ''
        }
    },
    computed: {
        // build string for Api calls
        axiosConfig() {
            const { key, language } = api;
            return {
                params: {
                    api_key: key,
                    query: this.titleFilter,
                    language: language
                }
            }
        }

    },
    methods: {
        // update input value
        onTitleFilterChange(product) {
            this.titleFilter = product
        },

        // check if there are characters entered in the search's field
        fetchFilteredContent() {
            store.isLoading = true;
            if (!this.titleFilter) {
                store.movies = [];
                store.series = [];
                return;
            }

            this.fetchApi('search/movie', 'movies');
            this.fetchApi('search/tv', 'series')


        },

        // movie's and series's Api calls
        fetchApi(endpoint, collection) {
            axios.get(`${api.baseUri}/${endpoint}`, this.axiosConfig)
                .then((res) => {
                    store[collection] = res.data.results
                }).catch(err => { console.error(err) })
                .then(() => { store.isLoading = false });

        }
    },



}

</script>

<template>
    <!-- receive by custom events value ​​arriving from the search's field -->
    <app-header @word-change="onTitleFilterChange" placeholder="Search content"
        @start-research="fetchFilteredContent"></app-header>

    <!-- list of movies searched -->
    <h1>MOVIES</h1>
    <prod-card v-for="movie in store.movies" :key="movie.id" :production="movie"></prod-card>

    <!-- list of series searched -->
    <h1>SERIE TV</h1>
    <prod-card v-for="serie in store.series" :key="serie.id" :production="serie"></prod-card>

</template>

<style>

</style>