<template>
    <div>
        <b-card header-tag="header" class="text-left m-2 col-12" draggable="true"
                @dragstart.self="startDrag($event , index)"
                @dragover.prevent
                @dragenter.prevent
                @drop="onDrop($event, index)">
            <template #header>
                <h5 class="mb-0 float-left">{{todo.title}}</h5>
                <b-button variant="link" class="float-right" @click="showModal">
                    <b-icon icon="trash" font-scale="1.3"></b-icon>
                </b-button>
            </template>
            <b-card-text>{{todo.description}}</b-card-text>
        </b-card>
        <b-modal :id="'modal-removeTodo'+todo.title" :title="'Remove <'+todo.title+'>'">
            Are you sure?
            <template #modal-footer="{cancel }">
                <b-button size="sm" @click="cancel()">
                    Cancel
                </b-button>
                <b-button size="sm" variant="info" @click="removeTodo()">
                    OK
                </b-button>
            </template>
        </b-modal>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "Todo",
        props: [
            "todo", "index"
        ],
        computed: {
            ...mapState(['todosList'])
        },
        methods: {
            showModal: function () {
                this.$bvModal.show('modal-removeTodo' + this.todo.title)
            },
            removeTodo: function () {
                this.$store.commit('removeFromTodosList', this.todo);
            },
            startDrag(evt, dragTodoId) {
                evt.dataTransfer.dropEffect = 'move';
                evt.dataTransfer.effectAllowed = 'move';
                evt.dataTransfer.setData('dragTodoId', dragTodoId)
            },
            onDrop(evt, dropTodoId) {
                const dragTodoId = evt.dataTransfer.getData('dragTodoId');
                this.$store.commit('moveTodo', {dragTodoId: dragTodoId, dropTodoId: dropTodoId});
            }
        }
    }
</script>

<style scoped>
    .card-header {
        background-color: unset;
        border-bottom: unset;
        margin-bottom: -30px;
    }

</style>
