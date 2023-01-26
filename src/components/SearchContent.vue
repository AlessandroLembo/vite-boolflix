<script>
export default {
    data() {
        return {
            searchValue: ''
        }
    }
}
</script>

<template>
    <!-- <form> -->
    <input type="text" v-model="searchValue">
    <button type="submit">Search</button>
    <!-- </form> -->
</template>    

<style>

</style>