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

            <!-- movie's and serie's poster -->
            <li id="poster">
                <img :src="posterPath" :alt="production.title" class="poster-path">
            </li>

            <!-- description of content -->
            <div class="caption">
                <ul class="caption-list">
                    <li>
                        <ul class="title">
                            <li>{{ title }}</li>
                            <li v-if="title !== originalTitle" class="subtitle">{{ originalTitle }}</li>
                        </ul>
                    </li>
                    <li class="flag-space">
                        <ul>
                            <li>
                                <img v-if="hasFlag" :src="flagSrc" :alt="production.original_language" class="flag">
                                <p v-else>{{ production.original_language }}</p>
                            </li>
                            <li>
                                <round-up :production="production.vote_average" class="stars"></round-up>
                            </li>
                        </ul>
                    </li>

                </ul>

                <p class="overview">{{ production.overview }}</p>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/horizonthalAlignm' as *;
@use '../assets/scss/partials/variables' as *;

.col {
    flex-basis: 25%;
    cursor: pointer;
    height: 500px;
    padding: 1rem;

    .card {
        height: $h100;
        background-color: black;
        position: relative;
    }
}

#poster {
    width: 100%;
    height: $h100;
    display: block;
}

.poster-path {
    width: 100%;
    height: $h100;
    object-fit: cover;
    display: block;
}

.card:hover .poster-path {
    opacity: 0;
}

.card:hover .caption {
    opacity: 1;
}

.caption {
    height: $h100;
    width: 100%;
    z-index: 1;
    padding: 1rem;

    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: 0;
    transition: 1s linear 1s;
}

.caption-list {
    height: 250px;
}

.title {
    font-size: 22px;
    padding-bottom: 10px;

    .subtitle {
        font-size: 18px;
        padding-bottom: 10px;
    }

}

li {
    list-style-type: none;
    text-align: center;
    color: white;
}

.stars {
    @include flex-horizonthal;
    padding-top: 10px;

}

.flag-space {
    .flag {
        height: 80px;
    }

    p {
        font-size: 20px;
        padding: 10px 0;
    }
}

.overview {
    height: 250px;
    overflow-y: auto;
    margin-top: 20px;
    padding: 20px 10px;
    text-align: center;
    color: white;

    position: absolute;
    bottom: 0;
    left: 0;
}
</style>