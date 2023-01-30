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
            <!-- <li><img :src="`${baseURL}w342${production.poster_path} `" :alt="production.title"></li> -->

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

    .card {
        height: 400px;
        border: 1px solid black;
        padding: 20px 0;
    }
}

.caption {
    height: 100%;
    width: 100%;
    position: relative;


}

ul {
    width: 100%;
    height: 200px;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;

    .title {
        font-size: 25px;
    }

}

li {
    // display: none;
    list-style-type: none;
    text-align: center;
    color: white;
}

.stars {
    position: absolute;
    left: 50%;
    transform: translate(-14%);
    top: 230px;
    height: 20px;
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
    position: absolute;
    top: 250px;
    left: 0;
    height: calc(100% - 250px);
    overflow-y: auto;
    padding: 20px 10px;
    text-align: center;
    color: white;
}
</style>