<script>
import axios from 'axios';
import { api } from './data/index.js';
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

    <h1>SERIE TV</h1>


</template>

<style>

</style>