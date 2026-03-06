<template>
    <Suspense>
        <template #default>
            <ArticleList />
        </template>
        <template #fallback><Loading /></template>
    </Suspense>
</template>


<script setup>
import ArticleList from '../components/ArticleList.vue';
import Loading from './Loading.vue';

</script>