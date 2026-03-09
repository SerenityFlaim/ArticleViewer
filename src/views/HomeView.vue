<template>
<header>

  </header>
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

<style scoped>

.nav-bar{

  border-color: 2px solid red;
  border: 2px;
}

</style>