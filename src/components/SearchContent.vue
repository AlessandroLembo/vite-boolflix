<script>
export default {
    data() {
        return {
            searchValue: ''
        }
    },

    emits: ['start-research']
}
</script>

<template>
    <!-- <form> -->
    <input type="text" v-model="searchValue">
    <button type="submit" @click="$emit('start-research')">Search</button>
    <!-- </form> -->
</template>    

<style>

</style>