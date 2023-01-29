<script>
export default {
    name: 'CalculateVote',
    props: {
        production: Number
    },

    data() {
        return [
            {
                star: 1
            },
            {
                star: 2
            },
            {
                star: 3
            },
            {
                star: 4
            },
            {
                star: 5
            }
        ]

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
