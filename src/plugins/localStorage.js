export default store => {
    store.subscribe((m, state) => {
        // Save the entire state to Local Storage
        localStorage.setItem('todosList', JSON.stringify(state.todosList));
    });
};
