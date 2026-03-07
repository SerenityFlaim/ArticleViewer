<template>
    <div class="hello">
        <div v-if="store.status === 'REQUESTED'"><Loading /></div>
        
        <div v-else-if="store.status == 'FAILED'">
            <p>Error: couldn't load data from the server.</p>
            <ButtonTemplate @click="store.fetchArticles">Refresh</ButtonTemplate>
        </div>

        <div v-else-if="store.articles.length">
            <Article
              v-for="article in store.articles"
              :id="article.id"
              :author="article.author"
              :title="article.title"
              :isPublished="article.isPublished"
            />
        </div>

        <p v-else>No articles in the list.</p>
    </div>
</template>

<script setup>
import { articleStore } from '../store';
import Article from './Article.vue'
import ButtonTemplate from './ButtonTemplate.vue';
import Loading from '../views/Loading.vue';

defineProps({
    msg: {
        type: String,
        required: true,
    },
})

const store = articleStore()
await store.fetchArticles()

</script>

<style scoped>
h1 {
    margin: 40 px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>