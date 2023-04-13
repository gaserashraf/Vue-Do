import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const todoStore = new Vuex.Store({
  state: {
    items: [
      {
        id: 1,
        title: "Learn Vue",
        completed: true,
      },
      {
        id: 2,
        title: "Learn React",
        completed: false,
      },
      {
        id: 3,
        title: "Learn Angular",
        completed: false,
      },
    ],
  },
  getters: {
    completedItems: (state) => {
      return state.items.filter((item) => item.completed);
    },
  },
  mutations: {
    updateItem: (state, payload) => {
      const index = state.items.findIndex((item) => item.id === payload.id);
      state.items[index].completed = payload.completed;
      state.items[index].title = payload.title;
    },
    deleteItem: (state, payload) => {
      const index = state.items.findIndex((item) => item.id === payload.id);
      if (index > -1)
      state.items.splice(index, 1);
    },
  },
});
