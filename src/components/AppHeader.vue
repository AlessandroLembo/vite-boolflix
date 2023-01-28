<script>
import SearchContent from './SearchContent.vue';
export default {
    name: 'AppHeader',
    components: { SearchContent },
    methods: {
        askFilterContent() {
            this.$emit('start-research');
        },

        changeWord(prod) {
            this.$emit('word-change', prod);
        }
    },

    emits: ['start-research', 'word-change']
}
</script>

<template>
    <search-content @start-research="askFilterContent" @word-change="changeWord"></search-content>

</template>

<style>

</style>