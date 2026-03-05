<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div v-if="store.articles.length">
            <Article
              v-for="article in store.articles"
              :key="article.id"
              :id="article.id"
              :author="article.author"
              :title="article.title"
              :body="article.body"
              :isPublished="article.isPublished"
            />
        </div>
        <p v-else>
            No articles in the list.
        </p>
    </div>
</template>

<script setup>
import { articleStore } from '../store';
import Article from './Article.vue'
//import store from '../store'


defineProps({
    msg: {
        type: String,
        required: true,
    },
})

const store = articleStore()

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