<template>
    <h1>Add new article form</h1>
    <ArticleForm title="New title" body="" isPublished=""
        v-on:add-article="(data) => store.addArticle(data)" />
</template>

<script setup>
import ArticleForm from '../components/ArticleForm.vue';
import { articleStore } from '../store';


const store = articleStore()
</script>