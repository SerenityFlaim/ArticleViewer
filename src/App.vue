<script setup>
import ArticleList from './components/ArticleList.vue'
</script>

<template>
  <nav class="nav-bar-wrapper">
    <div class="nav-bar">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/new">New Article</RouterLink>
    </div>
  </nav>
  <div class="background">
    <main class="articles">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.background {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  border: 2px solid orange;
}

.nav-bar-wrapper{
  display: flex;
  justify-content: center;
  /* border: 2px solid blue; */

  height: 4.5vh;
}

.nav-bar{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 25%;
  border: 4px solid #f2f0e3;
  border-radius: 40px;
  background-color: #293241;
}


.articles{
  border: 2px solid red;
}


</style>
