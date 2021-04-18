import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { uniqueId } from 'lodash';
import Todo from '../todo.interface';
import * as todoActions from './todos.actions';


export const todoFeatureKey = 'todo';

export interface TodosState {
  todos: Todo[]
}

export const todosInitialState: TodosState = {
  todos: [
      {id: uniqueId(), text: 'test1', isCompleted: true},
      {id: uniqueId(), text: 'test2', isCompleted: false},
      {id: uniqueId(), text: 'test3', isCompleted: false}
    ]
};

function addTodo(state: any, todo: Todo) {
  return {
    ...state,
    todos: [
      ...state.todos,
      todo
    ]
  };
}

function deleteTodo(state: any, todo: Todo) {
  const todos = state.todos.filter((item: Todo) => item.id !== todo.id);

  return {
    ...state, 
    todos: [
      ...todos
    ]
  };
};

export const todosReducer = createReducer(
  todosInitialState,
  on(todoActions.addTodo, addTodo),
  on(todoActions.deleteTodo, deleteTodo)
);

