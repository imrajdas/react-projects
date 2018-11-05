const intialState = {
    todos : ["buy something"]
}
export default function reducer(state = intialState, action){
    switch (action.type) {
        case "ADD_TODO": {
            return { todos: [action.todo]
            }
            break;
        }
        case "FETCH_TODOS": {
            return state
        }
    }

    return state
}