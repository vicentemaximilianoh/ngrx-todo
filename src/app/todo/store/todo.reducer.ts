
import { Action } from '@ngrx/store';
import ITodoState from './todo-state.interface';

const INITIAL_STATE: ITodoState = {
    todos: [
        {id: 1, text: 'test1', isCompleted: true},
        {id: 2, text: 'test2', isCompleted: false},
        {id: 3, text: 'test3', isCompleted: false}
      ]
};

export default function todoReducer(
    state: ITodoState = INITIAL_STATE, 
    action: Action
) {
    switch (action.type) {
        default:
            return state;
    }
}
