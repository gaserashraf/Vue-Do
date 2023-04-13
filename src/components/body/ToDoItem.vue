<template>
    <div class="to-do-item">
        <div class="item-left">
            <input type="checkbox" v-bind:checked="item.completed" v-on:change="changeCheck" />
        </div>
        <input class="item" v-bind:class="{ completed: item.completed }" v-bind:disabled="!isEditing" v-model="item.title"
            v-on:keyup.enter="updateItem">
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
        initialItem: {
            type: Object,
            required: true
        }
    }, data() {
        return {
            item: { ...this.initialItem },
            isEditing: false,
        };
    }, methods: {
        updateItem() {
            this.$store.commit('updateItem', {
                id: this.item.id,
                completed: this.item.completed,
                title: this.item.title
            });
            this.isEditing = false;
        }, deleteItem(id) {
            this.$store.commit('deleteItem', { id });
        }, changeCheck() {
            this.item.completed = !this.item.completed;
            this.$store.commit('updateItem', {
                id: this.item.id,
                completed: this.item.completed,
                title: this.item.title
            });
        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.to-do-item {
    margin-bottom: 10px;
    position: relative;
    transition: transform .5s ease-in-out;
    width: 500px;
}

.to-do-item:hover {
    transform: scale(1.1, 1.1);
}

input.item {
    width: 100%;
    padding: 12px 15px 12px 35px;
    font-size: 20px;
    border: none;
    box-shadow: 6px 6px 8px rgb(112, 231, 159);
    border-radius: 20px 0 20px 0;
    border: 1px solid #80bdab;
    color: black;
    outline: none;
}

input.completed {
    text-decoration: line-through;
    color: #0075FF;
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


.item-left {

    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(50%, -50%);
}

.item-left input {
    border-radius: 50%;

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

i {
    margin-right: 2px;
}

i:last-of-type {
    margin-right: 0;
}

@media screen and (max-width: 600px) {
    .to-do-item {
        width: 100%;
    }
}
</style>
    