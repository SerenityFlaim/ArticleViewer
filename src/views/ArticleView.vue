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
        <button @click="store.togglePublishStatus(props.id)">{{toggleText}}</button>
    </div>

</template>

<script setup>
import { computed } from 'vue';
import { articleStore } from '../store';

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

const store = articleStore()

const toggleText = computed(() => {
    return props.isPublished ? "Unpublish" : "Publish"
})

</script>