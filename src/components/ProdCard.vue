<script>
import RoundUp from './RoundUp.vue';
import { pics } from '../data';
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
        },

        posterPath() {
            if (!this.production.poster_path) return pics.placeholder;
            return pics.baseUrl + this.production.poster_path;
        }
    }
}
</script>

<template>
    <!-- List to print on page -->
    <div class="col">
        <div class="card">
            <li>
                <img :src="posterPath" :alt="production.title" class="poster">
            </li>

            <div class="caption">
                <ul class="caption-list">
                    <li class="title">{{ title }}</li>
                    <li v-if="title !== originalTitle" class="title">{{ originalTitle }}</li>
                    <li class="flag-space">
                        <img v-if="hasFlag" :src="flagSrc" :alt="production.original_language" class="flag">
                        <p v-else>{{ production.original_language }}</p>
                    </li>
                    <li class="stars-space">
                        <round-up :production="production.vote_average" class="stars"></round-up>
                    </li>
                </ul>

                <p class="overview">{{ production.overview }}</p>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
.col {
    flex-basis: 25%;
    padding: 0.5rem;
    cursor: pointer;
    height: 500px;

    .card {
        height: 100%;
        border: 1px solid black;
        padding: 20px 0;

        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;
    }
}

.poster {
    display: block;
    width: 100%;
    height: auto;
}

.card:hover .poster {
    opacity: 0;
    display: none;
}

.card:hover .caption {
    opacity: 1;
}

.caption {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: 0;
    transition: 3s ease-in-out 1s;
}

ul {
    width: 100%;

    .title {
        font-size: 25px;
    }

}

li {
    list-style-type: none;
    text-align: center;
    color: white;
}

.stars {
    display: flex;
    justify-content: center;

}

.flag-space {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .flag {
        height: 100px;
    }
}

.overview {
    overflow-y: auto;
    padding: 20px 10px;
    text-align: center;
    color: white;
}
</style>