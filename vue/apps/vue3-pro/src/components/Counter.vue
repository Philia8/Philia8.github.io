<template>
    <div>
      <button @click="count++">you clicked {{count}} times!</button>
    </div>
</template>

<script>
    export default{
        name: 'Counter' ,
        data() {
          return {
            count: 0
          }
        }
    }
</script>

<style scoped>
  
</style>
