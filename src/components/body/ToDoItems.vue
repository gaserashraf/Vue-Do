<template>
    <div class="container">
        <div id="to-do-items">
            <ToDoItem v-for="item in items" :key="item.id" :item="item" />
        </div>
    </div>
</template>
  
<script>
import ToDoItem from './ToDoItem.vue';
export default {
    name: "ToDoItems",
    data() {
        return {
            items: [
                {
                    id: 1,
                    title: "Learn Vue",
                    completed: false
                },
                {
                    id: 2,
                    title: "Learn React",
                    completed: false
                },
                {
                    id: 3,
                    title: "Learn Angular",
                    completed: false
                }
            ]
        };
    },
    components: { ToDoItem }
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
    