<template>
    <h1>Add new article form</h1>
    <ArticleForm title="New title" body="" isPublished=""
        v-on:add-article="submit" />
</template>

<script setup>
import ArticleForm from '../components/ArticleForm.vue';
import { articleStore } from '../store';
import { useRouter } from 'vue-router';


const store = articleStore()
const router = useRouter()

function submit(data){
    store.addArticle(data)
    router.push('/')
}
</script>