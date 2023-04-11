<template>
    <div class="to-do-item">

        <!-- <input type="checkbox" v-bind:checked="item.completed" v-on:change="changeCheck" /> -->
        <input v-bind:disabled="!isEditing" v-model="newTitle" v-on:keyup.enter="updateItem">
        <div class="item-right">
            <i class="fas fa-edit green" @click="isEditing = true"></i>
            <i class="fas fa-trash red" @click="deleteItem(item.id)"></i>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ToDoItems',
    props: {
        item: {
            type: Object,
            required: true
        }
    }, data() {
        return {
            isEditing: false,
            newTitle: this.item.title

        };
    }, methods: {
        updateItem() {
            console.log('updateItem');
            this.isEditing = false;
        },deleteItem(id) {
            console.log('deleteItem',id);
        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.to-do-item {
    margin-bottom: 10px;
    position: relative;
}

input {
    width: 500px;
    padding: 12px 15px;
    font-size: 20px;
    border: none;
    box-shadow: 6px 6px 8px rgb(112, 231, 159);
    border-radius: 20px 0 20px 0;
    border: 1px solid #80bdab;
    color: black;
    transition: all .5s ease-in-out;
    outline: none;
}

input:hover {
    transform: scale(1.1, 1.1);
}

.item-right {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translate(-50%, -50%);
}

i {
    cursor: pointer;
    transition: all .2s ease-in-out;
}
i.green:hover {
    color: #4CAF50;
}
i.red:hover {
    color: #f44336;
}
i{
    margin-right: 2px;
}
i:last-of-type{
    margin-right: 0;
}
</style>
    