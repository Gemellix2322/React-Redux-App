import { RECEIVE_DATA } from "../actions/shared";
import { ADD_GOAL, REMOVE_GOAL } from "../actions/goals";

export default function goals (State = [], action){
    switch(action.type){
        case ADD_GOAL: 
            return State.concat([action.goal])
        case REMOVE_GOAL:
            return State.filter((goal) => goal.id !== action.id)
        case RECEIVE_DATA:
            return action.goals;
        default :
            return State
    }
}