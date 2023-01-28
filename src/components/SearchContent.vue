<script>
export default {
    name: 'SearchContent',
    data() {
        return {
            searchValue: '',
        }
    },

    props: {
        placeholder: String,
        buttonLabel: String
    },

    emits: ['word-change', 'start-research']
}
</script>

<template>
    <form @submit.prevent="$emit('start-research')">
        <input type="text" v-model.trim="searchValue" @keyup="$emit('word-change', searchValue)"
            :placeholder="placeholder || 'Search'">
        <button type="submit"> {{ buttonLabel || 'Search' }} </button>
    </form>
</template>    

<style>

</style>