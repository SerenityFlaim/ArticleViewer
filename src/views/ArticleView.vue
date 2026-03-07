<template>
    <div class="article"
            :style="{ 'border-color': articleInStore?.isPublished ? 'white' : 'crimson'}"
    >
        <h1>{{ articleInStore?.title }}</h1>
        <p
        :style = "authorStyle"
        >
        {{ capitalizedAuthor }}
        </p>
        <p>{{ articleInStore?.body }}</p>
        <button @click="store.togglePublishStatus(props.id)">{{toggleText}}</button>
    </div>

</template>

<script setup>
import { computed, watch } from 'vue';
import { articleStore } from '../store';

const props = defineProps({
    id: {
        type: Number,
        required: true,
    },
})

const store = articleStore()

const articleInStore = computed(() => {
    return store.articles.find((a) => a.id == props.id)
})

watch(() => articleInStore.value?.isPublished, (newStatus, oldStatus) => {
    console.log(`Article publish changed from ${oldStatus} to ${newStatus}`)
})

const toggleText = computed(() => {
    return articleInStore.value?.isPublished ? "Unpublish" : "Publish"
})

</script>