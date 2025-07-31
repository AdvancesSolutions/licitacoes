<template>
  <div class="mode">
    <svg  v-show="mixLayout == 'light-only'"
    @click="customizeMixLayout('dark-only')">
      <use href="@/assets/svg/icon-sprite.svg#moon"></use>
    </svg>
  
    <svg   v-show="mixLayout == 'dark-only'"
    @click="customizeMixLayout('light-only')">
      <use href="@/assets/svg/icon-sprite.svg#moon"></use>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'Mode',
    data() {
      return {
        mixLayout: 'dark-only', // Mudado para dark-only como padrão
      };
    },
    mounted() {
      // Verificar se já existe uma preferência salva, senão usar dark-only
      const savedLayout = localStorage.getItem('layoutVersion') || 'dark-only';
      this.mixLayout = savedLayout;
      this.customizeMixLayout(savedLayout);
    },
    methods: {
      customizeMixLayout(val) {
        this.mixLayout = val;
        this.$store.dispatch('layout/setLayout', {class:val});
        localStorage.setItem('layoutVersion', val);
      },
    },
  };
</script>
