<script setup>
import ArticleList from './components/ArticleList.vue'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/new">New Article</RouterLink>
    </nav>
  </header>

  <main>
     <RouterView />

  </main>
</template>

<style scoped>

</style>
