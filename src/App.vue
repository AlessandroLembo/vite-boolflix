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
        onTitleFilterChange(product) {
            this.titleFilter = product
        },

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
    <app-header @word-change="onTitleFilterChange" placeholder="Search content"
        @start-research="fetchFilteredContent"></app-header>
    <h1>MOVIES</h1>
    <prod-card v-for="movie in store.movies" :key="movie.id" :production="movie"></prod-card>
    <h1>SERIE TV</h1>
    <prod-card v-for="serie in store.series" :key="serie.id" :production="serie"></prod-card>

</template>

<style>

</style>