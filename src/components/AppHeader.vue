<script>
import SearchContent from './SearchContent.vue';
export default {
    name: 'AppHeader',
    components: { SearchContent },
    methods: {

        // methods to pass data from search-content to App-Vue 
        askFilterContent() {
            this.$emit('start-research');
        },

        changeWord(word) {
            this.$emit('word-change', word);
        }
    },

    emits: ['start-research', 'word-change']
}
</script>

<template>
    <div class="header-container">
        <h1>BOOLFIX</h1>
        <search-content @start-research="askFilterContent" @word-change="changeWord"></search-content>

    </div>

</template>

<style scoped lang="scss">
@use '../assets/scss/partials/verticalAlignm' as *;

.header-container {
    height: 100px;
    @include flex-vertical;
    justify-content: space-between;

    h1 {
        color: red;
        font-size: 40px;
        margin-left: 2rem;
    }
}
</style>