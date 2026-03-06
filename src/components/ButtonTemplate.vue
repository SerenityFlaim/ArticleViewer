<template>
  <button class="template-btn">
    <slot></slot> 
  </button>
</template>

<style scoped>
.tetmplate-btn {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>