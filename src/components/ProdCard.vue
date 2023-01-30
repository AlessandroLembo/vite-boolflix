<script>
import RoundUp from './RoundUp.vue';
export default {
    name: 'ProdCard',
    components: { RoundUp },
    data() {
        return {
            baseURL: 'https://image.tmdb.org/t/p/'
        }
    },

    props: {
        production: Object
    },

    computed: {

        // return movie's and series' title
        title() {
            return this.production.title || this.production.name;
        },

        // return movie's and series's original title
        originalTitle() {
            return this.production.original_title || this.production.original_name;
        },

        // check if flags is inlcudes in array get from Api calls
        hasFlag() {
            const flags = ['it', 'en'];
            return flags.includes(this.production.original_language);
        },

        // return the string builded to print the flag's image
        flagSrc() {
            const url = new URL(`../assets/flags/${this.production.original_language}.png`, import.meta.url)
            return url.href;
        }
    }
}
</script>

<template>
    <!-- List to print on page -->
    <div class="col">
        <div class="card">
            <li><img :src="`${baseURL}w342${production.poster_path} `" :alt="production.title"></li>

            <div class="caption">
                <ul>
                    <li>{{ title }}</li>
                    <li v-if="title !== originalTitle">{{ originalTitle }}</li>
                    <li>
                        <img v-if="hasFlag" :src="flagSrc" :alt="production.original_language">
                        <p v-else>{{ production.original_language }}</p>
                    </li>
                    <li>
                        <round-up :production="production.vote_average"></round-up>
                    </li>
                    <li> {{ production.overview }} </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
.col {
    flex-basis: 25%;
    padding: 0.5rem;
    cursor: pointer;
}

.caption li {
    display: none;
}



li {
    list-style-type: none;
}
</style>