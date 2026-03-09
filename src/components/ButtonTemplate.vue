<template>
  <button class="template-btn">
    <slot></slot> 
  </button>
</template>

<style scoped>
.template-btn {
  min-width: 120px;
  height: 45px;
  font-weight: 500;
  font-size: 20px;
  padding: 8px 16px;
  background-color: #ee6c4d;
  text-align: center;
  color: #f2f0e3;
  /* border: 4px solid transparent; */
  transition: all 0.25s ease;
  border-radius: 15px;
  cursor: pointer;
}

.template-btn:hover {
  border: 4px solid #f2f0e3;
}
</style>