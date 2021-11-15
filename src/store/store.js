import Vue from 'vue'
import Vuex from 'vuex'
import localStoragePlugin from '../plugins/localStorage'
import {tid} from '../plugins/tidGenerator'
Vue.use(Vuex);

const todosList = JSON.parse(localStorage.getItem('todosList')) || [];

export const store = new Vuex.Store({
    plugins: [localStoragePlugin],
    state: {
        todosList
    },
    mutations: {
        addToTodosList(state, item){
            state.todosList.push({
                id : tid(),
                title : item.title,
                description : item.description
            });
        },
        moveTodo (state, { dragTodoId, dropTodoId }) {
            const dragTodo = todosList.splice(dragTodoId, 1)[0];
            todosList.splice(dropTodoId, 0, dragTodo)    // insert dragTodo in dropTodoId
        },
        sortTodos(state) {
            const todos = state.todosList;
            todos.sort((a, b) => {
                let compare = 0;
                if (a.title > b.title) {
                    compare = 1;
                } else if (b.title > a.title) {
                    compare = -1;
                }
                return compare;
            });
            state.todosList = todos;
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
