<template>
    <div class="article"
            :style="{ 'border-color': isPublished ? 'white' : 'crimson'}"
    >
        <div class="article-info">
            <h1>{{ title }}</h1>
            <p
            :style = "authorStyle"
            >
            {{ capitalizedAuthor }}
            </p>
        </div>
        <!-- <p>{{ body }}</p> -->
        <RouterLink :to="{ name: 'article', params: {id: id}}">Read more</RouterLink>
    </div>

</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
    id: {
        type: Number,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    isPublished: {
        type: Boolean,
        required: true,
    }
})


const capitalizedAuthor = computed(() => {
    return props.author ? props.author.toUpperCase() : ''
})

const authorStyle = computed(() => {
    return {
        fontStyle: props.isPublished ? 'normal' : 'italic',
        fontWeight: props.isPublished ? 'normal' : 'bold'
    }
})
</script>

<style scoped>
.article{
    padding: 0 1rem 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 390px;
    height: 150px;
    border: 3px solid;
    border-color: #f2f0e3;
    border-radius: 10px;
}

.article-info{
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* border: 3px solid lightblue; */
}

h1 {
    font-size: 25px;
    font-weight: bold;
    /* border: 1px solid #000; */
}
p {
    /* border: 1px solid #000; */
    font-size: medium;
}
a {
    font-size: 18px;
}

</style>