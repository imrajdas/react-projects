export function addTodo() {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

export function fetchTodos(){
    return {
        type: "FETCH_TODOS"
    }
}