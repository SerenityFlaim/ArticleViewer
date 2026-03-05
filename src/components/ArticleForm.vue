<template>
    <div>
        <h2>Add new article</h2>
        <form>
            <div><input type="text" v-model="article.title" placeholder="Title"></div>
            <div><input type="text" v-model="article.author" placeholder="Author"></div>
            <div><textarea v-model="article.body" placeholder="Body"></textarea></div>
            <div><label><input type="checkbox" v-model="article.isPublished">Published</label></div>
            <div><input type="submit" value="Add" v-on:click.prevent="$emit('add-article', article)"></div>
        </form>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const props = defineProps({
    title: String,
    body: String,
    author: String,
    isPublished: Boolean,
})

let article = ref({
    title: props.title,
    body: props.body,
    author: props.author,
    isPublished: props.isPublished
})

</script>