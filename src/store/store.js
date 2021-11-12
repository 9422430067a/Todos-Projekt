import Vue from 'vue'
import Vuex from 'vuex'
import localStoragePlugin from '../plugins/localStorage'

Vue.use(Vuex);

const todosList = JSON.parse(localStorage.getItem('todosList')) || [];

export const store = new Vuex.Store({
    plugins: [localStoragePlugin],
    state: {
        todosList
    },
    mutations: {
        addToTodosList(state, item){
            state.todosList.push(item);
        },
        removeFromTodosList(state, item){
            let index = state.todosList.indexOf(item);
            if (index > -1) {
                state.todosList.splice(index, 1);
            }
        }
    },
    actions: {}
});
