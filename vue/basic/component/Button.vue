<template>
    <div>
      <input type="button" :value="name">
    </div>
</template>

<script>
    export default{
        name: 'Button' ,
        props: ["name"]
    }
</script>

<style scoped>
  
</style>
