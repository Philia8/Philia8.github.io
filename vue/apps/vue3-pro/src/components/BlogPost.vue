<template>
  <h4>{{title}}</h4>
  <button @click="this.$emit('enlarge-text')">Enlarge Text</button>
  <slot />

</template>

<script>
  export default {
    name: 'BlogPost',
    props: ['title', 'fontsize'],
    emits: ['enlarge-text']
  }
</script>

<style scoped>

</style>