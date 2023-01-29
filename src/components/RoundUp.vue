<script>
export default {
    name: 'CalculateVote',
    props: {
        production: Number
    },

    computed: {
        getVoteOneToFive() {
            const decimalVote = Math.ceil(this.production / 2);
            console.log(decimalVote);
            return decimalVote;
        },
    }

}
</script>

<template>

</template>

<style>

</style>
