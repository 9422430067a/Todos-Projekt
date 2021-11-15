<template>
    <b-container>
        <b-row class="view-list text-left">

            <b-col md="7" class="pb-3">
                <b-row>
                    <b-col md="12">
                        <h2 class="m-3 float-left">My Todo List</h2>
                        <b-button v-if="todosList.length !== 0" variant="dark" class="float-right mt-3"
                                  @click="sortedTodos()">
                            <b-icon icon="sort-alpha-down" font-scale="1" class="mr-1"></b-icon>
                            Sort Todos
                        </b-button>
                    </b-col>
                    <b-col md="12">
                        <h4 v-if="todosList.length === 0" class="ml-2 mt-4">
                            <b-icon icon="card-checklist" font-scale="1" class="mr-1"></b-icon>
                            Start planning and create Todos List !!!
                        </h4>
                    </b-col>
                </b-row>
                <Todo v-for="(todo , index) in todosList" :key="todo.id" :todo="todo" :index="index"/>
            </b-col>

            <b-col md="5">
                <new-todo/>
            </b-col>

        </b-row>
    </b-container>
</template>

<script>
    import {mapState} from "vuex";
    import Todo from "./Todo";
    import newTodo from "./newTodo";

    export default {
        name: "TodosList",
        components: {
            Todo,
            newTodo
        },
        computed: {
            ...mapState(['todosList'])
        },
        methods: {
            sortedTodos: function () {
                this.$store.commit('sortTodos');
            }
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
