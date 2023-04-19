<template>
  <div id="to-do-header">
    <div class="container">
      <h1>Welcome to VueDo</h1>
      <ToDoInput />
      <p>Completed {{ totalCompletedItems }} of {{ totalItems }} tasks</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ToDoInput from '../header/ToDoInput.vue';
export default {
  name: 'ToDoHeader',
  components: {
    ToDoInput
  }, computed: {
    ...mapGetters(['totalItems', 'totalCompletedItems'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#to-do-header {
  background: #80bdab;
  text-align: center;
  padding: 30px 0;
  color: white;
}

#to-do-header h1 {
  font-size: 40px;
}

p {
  margin-bottom: 0;
}
</style>
  