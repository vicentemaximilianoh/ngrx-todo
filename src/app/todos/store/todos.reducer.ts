import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import Todo from '../todo.interface';
import * as todoActions from './todos.actions';


export const todoFeatureKey = 'todo';

export interface TodosState {
  todos: Todo[]
}

export const todosInitialState: TodosState = {
  todos: [
      {id: 1, text: 'test1', isCompleted: true},
      {id: 2, text: 'test2', isCompleted: false},
      {id: 3, text: 'test3', isCompleted: false}
    ]
};


export const todosReducer = createReducer(
  todosInitialState,
  on(todoActions.addTodo, (state: any, todo: Todo) => ({ ...state, todos: [ ...state.todos, todo ]}))
);

