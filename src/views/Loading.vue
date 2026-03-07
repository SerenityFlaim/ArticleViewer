<template>
    <p>Loading articles...</p>
    <div class="loader"></div>
    <ButtonTemplate @click="store.cancelFetch">Cancel</ButtonTemplate>
</template>

<script setup lang="ts">
import ButtonTemplate from '../components/ButtonTemplate.vue';
import { articleStore } from '../store';
const store = articleStore();
</script>


<style scoped>
.loader {
    border: 8px solid #f3f3f3;
    border-top: 8px solid lightskyblue;
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