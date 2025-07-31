<template>
    <Breadcrumbs main="E-commerce" title="Produto" />

    <topPage />
</template>

<script>
import topPage from './toppage.vue'

export default {
    name: 'indexProduct',
    components: {
        topPage
    }
}
</script>
