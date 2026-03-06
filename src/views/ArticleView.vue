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
    </div>

</template>

<script setup>
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
</script>