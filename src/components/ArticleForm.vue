<template>
    <div>
        <form class="input-wrapper">
            <div><input type="text" v-model="article.title" placeholder="Title" class="text-input"></div>
            <div><input type="text" v-model="article.author" placeholder="Author" class="text-input"></div>
            <div><textarea v-model="article.body" placeholder="Body" class="text-input"></textarea></div>
            <div><label><input type="checkbox" v-model="article.isPublished">Published</label></div>
            <ButtonTemplate v-on:click.prevent="$emit('add-article', article)">
                Add
            </ButtonTemplate>
        </form>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import ButtonTemplate from './ButtonTemplate.vue';

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

<style scoped>

.input-wrapper{
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    /* border: 2px solid black; */
}

.text-input{
    width: 300px;
    height: 40px;
    background-color: #f2f0e3;
    border-radius: 15px;
    font-size: 20px;
    text-align: center;
    font-weight: 600;
    color: #2e2e2e;
    border: 4px solid #ee6c4d;
}

</style>