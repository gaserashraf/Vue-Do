<template>
    <div id="to-do-input">
        
        <input type="text" placeholder="Add thing to do" id="input" v-model="title"  v-on:keyup.enter="addItem">
        <button class="reset-button custom-button" id='butAdd' v-on:click="addItem">Add</button>
    </div>
</template>
  
<script>
export default {
    name: 'ToDoInput',
    data() {
        return {
            title: '',
        };
    }
    , methods: {
        addItem() {
            if (this.title.trim() === '') {
                return;
            }
            this.$store.commit('addItem', {
                title: this.title,
                completed: false,
                id: this.$store.state.items.length + 1
            });
            this.title = '';
        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#to-do-input {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

input {
    height: 20px;
    margin: 0;
    border: none;
    border-radius: 0;
    width: 500px;
    padding: 10px;
    font-size: 16px;
    height: 100%;
    outline: none;
}

.reset-button {
    border-width: 0;
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    line-height: inherit;
    padding: 0;
}

.custom-button {
    height: 100%;
    font-size: 16px;
    width: 200px;
    background: #d9d9d9;
    color: #555;
    cursor: pointer;
}

@media screen and (max-width: 600px) {
    #to-do-input {
        flex-direction: column;
        height: 80px;
    }

    input {
        width: 100%;
    }

    .custom-button {
        width: 100%;

    }


}
</style>
    