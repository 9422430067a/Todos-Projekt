<template>
    <div>
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
    </div>
</template>

<script>
    export default {
        name: "newTodo",
        data() {
            return {
                newTodo: {
                    title: '',
                    description: ''
                },
            }
        },
        methods: {
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
    }
</script>

<style scoped>

</style>
