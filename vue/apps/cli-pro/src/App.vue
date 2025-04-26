<template>
  <BlogPost title="hello"></BlogPost>
  <Counter></Counter>
</template>

<script type="module">
import BlogPost from './components/BlogPost';
import Counter from './components/Counter.js';

export default {
  name: 'App',
  components: {
    BlogPost,
    Counter
  }
}
</script>

<style>
</style>
