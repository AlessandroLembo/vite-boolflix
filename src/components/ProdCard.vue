<script>
export default {
    name: 'ProdCard',
    props: {
        production: Object
    },
    compued: {
        title() {
            return this.production.title || this.production.name;
        },
    }
}
</script>

<template>
    <ul>
        <li>{{ title }}</li>
        <li v-if="title !== original_title">{{ original_title }}</li>
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