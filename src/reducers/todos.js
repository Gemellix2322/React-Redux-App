import { RECEIVE_DATA } from "../actions/shared";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/todos";

export default function todos (State=[], action) {
    switch(action.type){
        case ADD_TODO :
            return State.concat([action.todo])  
        case REMOVE_TODO :
            return State.filter((todo) => todo.id !== action.id)
        case TOGGLE_TODO :
            return State.map((todo) => todo.id !== action.id ? todo : Object.assign({}, todo, {complete: !todo.complete}))
        case RECEIVE_DATA: 
            return action.todos;
        default :
            return State
    }
}