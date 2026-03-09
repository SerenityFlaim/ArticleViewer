<template>
    <div class="loading-wrapper">
        <h1>Loading articles...</h1>
        <div class="loader"></div>
        <ButtonTemplate @click="store.cancelFetch">Cancel</ButtonTemplate>
    </div>
</template>

<script setup lang="ts">
import ButtonTemplate from '../components/ButtonTemplate.vue';
import { articleStore } from '../store';
const store = articleStore();
</script>


<style scoped>
.loading-wrapper{
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

h1 {
    font-size: 25px;
    font-weight: bold;
    /* border: 1px solid #000; */
}

.loader {
    border: 5px solid #f3f3f3;
    border-top: 5px solid #ee6c4d;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); } 
    100% { transform: rotate(360deg); }
}

</style>