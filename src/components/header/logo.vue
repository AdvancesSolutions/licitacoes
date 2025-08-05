<template>
  <div class="header-logo-wrapper col-auto p-0">
    <div class="logo-wrapper">
      <router-link to="/">
        <span class="logo-text">advances</span>
      </router-link>
    </div>
    <div class="toggle-sidebar" @click="toggle_sidebar">
      <vue-feather
        class="status_toggle middle sidebar-toggle"
        type="align-center"
        id="sidebar-toggle"
      ></vue-feather>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Logo',
    methods: {
      toggle_sidebar() {
        this.$store.dispatch('menu/opensidebar');
      },
    },
  };
</script>

<style scoped>
.logo-text {
  font-size: 24px;
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
