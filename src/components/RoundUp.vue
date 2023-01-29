<script>
export default {
    name: 'CalculateVote',
    props: {
        production: Number
    },

    data() {
        return {
            stars: [
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

        }

    },

    computed: {
        getVoteOneToFive() {
            const vote = Math.ceil(this.production / 2);
            return vote;
        },
    }

}
</script>

<template>
    <ul>
        <li v-for="star in stars">
            <font-awesome-icon v-if="getVoteOneToFive < star.star" icon="fa-regular fa-star" />
            <font-awesome-icon v-else icon="fa-solid fa-star" />
        </li>
    </ul>
</template>

<style>

</style>
