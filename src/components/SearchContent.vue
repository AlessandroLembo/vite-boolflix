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

    <!-- form to collect data -->
    <form @submit.prevent="$emit('start-research')">
        <div class="search-field">
            <input type="text" v-model.trim="searchValue" @keyup="$emit('word-change', searchValue)"
                :placeholder="placeholder || 'Search'">
            <button type="submit"> {{ buttonLabel || 'Search' }} </button>
        </div>
    </form>
</template>    

<style scoped lang="scss">
@use '../assets/scss/partials/verticalAlignm' as *;

form {
    margin-right: 2rem;
}

.search-field {
    height: 70px;
    @include flex-vertical;
}

input {
    width: 250px;
    height: 40px;
}

button {
    background-color: red;
    width: 90px;
    color: white;
    height: 40px;
    cursor: pointer;
}
</style>