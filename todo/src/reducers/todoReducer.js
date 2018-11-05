export default function reducer(state = {}, action){
    switch (action.type) {
        case "ADD_TODO": {
            return {...state,  todos: [action.todo]
            }
        }

        case "FETCH_TODOS": {
            return {...state}
        }
    }

    return state
}