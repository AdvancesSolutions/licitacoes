<template>
  <router-link to="/">
    <span class="logo-text">advances</span>
  </router-link>
</template>
<script>

  export default {
    name: 'Logo',
  };
</script>

<style scoped>
.logo-text {
  font-size: 20px;
  font-weight: 700;
  color: #7366ff;
  text-decoration: none;
  letter-spacing: 1px;
}

.logo-text:hover {
  color: #5a4fcf;
  text-decoration: none;
}
</style>
