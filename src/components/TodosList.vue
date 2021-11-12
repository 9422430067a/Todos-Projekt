<template>
    <b-container>
        <b-row class="view-list text-left">

            <b-col md="7" class="pb-3">
                <h2 class="m-3">My Todo List</h2>
                <h4 v-if="todosList.length === 0" class="ml-2 mt-4">
                    <b-icon icon="card-checklist" font-scale="1" class="mr-1"></b-icon>
                    Start planning and create Todos List !!!
                </h4>
                <Todo v-for="todo in todosList" :key="todo.title" :todo="todo"/>
            </b-col>

            <b-col md="5">
                <h2 class="m-3">Add new Todo</h2>
                <form ref="form">
                    <b-form-input
                            id="title-input"
                            v-model="newTodo.title"
                            placeholder="Title"
                    ></b-form-input>
                    <b-form-textarea
                            id="description"
                            v-model="newTodo.description"
                            placeholder="Enter description ..."
                            rows="3"
                            class="mt-2"
                    ></b-form-textarea>
                </form>
                <b-button variant="dark" class="mt-4 mb-3 float-right" @click="handleSubmit">
                    <b-icon icon="plus" font-scale="1.3"></b-icon>
                </b-button>
            </b-col>

        </b-row>
    </b-container>
</template>

<script>
    import {mapState, mapMutations} from "vuex";
    import Todo from "./Todo";

    export default {
        name: "TodosList",
        data() {
            return {
                newTodo: {
                    title: '',
                    description: ''
                },
            }
        },
        components: {
            Todo
        },
        methods: {
            ...mapMutations([
                'addToTodosList', // map `this.addToTodosList()` to `this.$store.commit('addToTodosList')
                'removeFromTodosList'
            ]),
            handleSubmit: function () {
                if (this.newTodo.title !== '') {
                    this.$store.commit('addToTodosList', this.newTodo);
                    this.newTodo = {
                        title: '',
                        description: ''
                    }
                }
            }
        },
        computed: {
            ...mapState(['todosList'])
        }
    }
</script>

<style scoped>
    .view-list {
        background: #eee;
        box-shadow: 0 10px 11px -8px;
        border-radius: .25rem;
    }
</style>
