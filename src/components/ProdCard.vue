<script>
export default {
    name: 'ProdCard',
    props: {
        production: Object
    },
    computed: {
        title() {
            return this.production.title || this.production.name;
        },

        originalTitle() {
            return this.production.original_title || this.production.original_name;
        },

        hasFlag() {
            const flags = ['it', 'en'];
            return flags.includes(this.production.original_language);
        },

        flagSrc() {
            const url = new URL(`../assets/flags/${this.production.original_language}.png`, import.meta.url)
            return url.href;
        }
    }
}
</script>

<template>
    <ul>
        <li>{{ title }}</li>
        <li v-if="title !== originalTitle">{{ originalTitle }}</li>
        <li>
            <img v-if="hasFlag" :src="flagSrc" :alt="production.original_language">
            <p v-else>{{ production.original_language }}</p>
        </li>
        <li>{{ production.vote_average }}</li>
    </ul>
</template>

<style>

</style>