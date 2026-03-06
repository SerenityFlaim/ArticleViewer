<template>
    <div class="article"
            :style="{ 'border-color': isPublished ? 'white' : 'crimson'}"
    >
        <h1>{{ title }}</h1>
        <p
        :style = "authorStyle"
        >
        {{ capitalizedAuthor }}
        </p>
        <p>{{ body }}</p>
        <RouterLink :to="{ name: 'article', params: {id: id}}">
            Read more
        </RouterLink>
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
a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
}

a:hover {
    text-decoration: underline;
}

h1 {
    font-size: large;
    font-weight: bold;
}
p {
    font-size: medium;
}

.article{
    border: 3px solid;
    border-color: white;
}
</style>