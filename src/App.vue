<template>
  <div id="app">
    <ToDoHeader />
    <ToDoItems />
  </div>
</template>

<script>
import ToDoItems from './components/body/ToDoItems.vue';
import ToDoHeader from './components/header/ToDoHeader.vue';

export default {
  name: 'App',
  components: {
    ToDoHeader,
    ToDoItems
}
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #bbf1c8;
}

#app {
  font-family: 'Trebuchet MS';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

.container {
  max-width: 800px;
  margin: 0px auto;
}

@media screen and (max-width: 600px) {
  .container {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
}
</style>
