<template>
    <div class="container">
        <div id="to-do-items">
            <p v-if="totalItems === 0">No items to display.</p>
            <ToDoItem v-for="item in items" :key="item.id" :initialItem="item" />
        </div>
    </div>
</template>
  
<script>
import ToDoItem from './ToDoItem.vue';
import { mapGetters } from 'vuex';
export default {
    name: "ToDoItems",
    components: { ToDoItem },
    computed: {
        ...mapGetters(['items','totalItems'])
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#to-do-items {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
    