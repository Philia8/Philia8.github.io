<template>
  <div>
    <!-- hhh -->
    <!-- <Counter></Counter>
    <OtherCounter></OtherCounter> -->
    <!-- <BlogPost title="hhhh"></BlogPost> -->
    <!-- <div :style="{'font-size': postFontSize + 'em'}">
      <BlogPost v-for="post of titles" :title="post.title" :key="post.id" @enlargeText="postFontSize += 0.1">
        插槽内容
      </BlogPost>
    </div> -->
    动态组件切换
    <!-- <div class="container">
      <div class="tabs">
        <button v-for="btn in btns" @click="compsName = btn.name" class="tab"
                :class="{'active': btn.name === compsName}">{{btn.name}}</button>
      </div>
      <div class="block">
        <component :is="compsName" />
      </div>
    </div> -->
    <Counter/>
  </div>
</template>

<script>
  import Counter from './components/Counter.js';
  import OtherCounter from './components/Counter';
  import BlogPost from './components/BlogPost.vue';
  export default {
    name: 'App',
    components: {
      // Counter,
      OtherCounter,
      BlogPost
    },
    data() {
      return {
        titles: [
          { id: 1, title: '苹果' },
          { id: 2, title: '香蕉' },
          { id: 3, title: '草莓' }
        ],
        postFontSize: 1,
        compsName: 'Counter',
        btns: [
          { id: 1, name: 'Counter' },
          { id: 2, name: 'OtherCounter' },
          { id: 3, name: 'BlogPost' }
        ]
      };
    }
  }
</script>

<style scoped>
  .container {
    width: 500px;
    height: 200px;
    border: 1px solid #fab;
  }

  .tabs {
    display: flex;
  }

  .tabs button {
    flex: 1;
  }

  button {
    background-color: #fab;
  }

  .active {
    background-color: aquamarine;
  }

  .block {
    width: 100%;
    height: 100%;
    background-color: aquamarine;
  }
</style>