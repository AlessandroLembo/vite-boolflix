<script>
export default {
    name: 'SearchContent',
    data() {
        return {
            searchValue: ''
        }
    },

    props: {
        placeholder: String,
        buttonLabel: String
    },

    emits: ['start-research', 'filter-content']
}
</script>

<template>
    <form>
        <input type="text" v-model="searchValue" :placeholder="placeholder || 'Search'">
        <button type="submit" @click="$emit('start-research', searchValue)"> {{ buttonLabel || 'Search' }} </button>
    </form>
</template>    

<style>

</style>