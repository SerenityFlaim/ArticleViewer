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
        <ButtonTemplate @click="store.togglePublishStatus(props.id)">{{toggleText}}</ButtonTemplate>
    </div>

</template>

<script setup>
import { computed, watch } from 'vue';
import { articleStore } from '../store';
import ButtonTemplate from '../components/ButtonTemplate.vue';

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

<style scoped>
.article{
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

h1 {
    font-size: 55px;
}

p {
    font-size: 20px;
    font-weight: 500;
}
</style>