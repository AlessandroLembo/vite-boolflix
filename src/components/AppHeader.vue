<script>
import SearchContent from './SearchContent.vue';
export default {
    name: 'AppHeader',
    components: { SearchContent },
    methods: {
        fetchChoosenContent(word) {
            this.$emit('filter-content', word);
        }
    }

}
</script>

<template>
    <search-content @start-research="fetchChoosenContent"></search-content>

</template>

<style>

</style>