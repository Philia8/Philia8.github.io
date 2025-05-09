<template>
  <h4>{{title}}</h4>
  <button @click="this.$emit('enlarge-text')">Enlarge Text</button>
  <slot />

</template>

<script>
  export default {
    name: 'BlogPost',
    // props: ['title', 'fontsize'],
    emits: ['enlarge-text'],
  props:{
    propA: {
      type: Number / [String, Number],
      requiered: true / false,
      default: 18,
      defualt(rawProps) { //对象或数组通过函数返回
        return {}
      },
      validator(value, props) {

      }
    }
  }
  }
</script>

<style scoped>

</style>