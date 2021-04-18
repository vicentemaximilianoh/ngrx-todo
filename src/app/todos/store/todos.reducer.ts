import { createReducer, on } from '@ngrx/store';
import Todo from '../todo.model';
import * as todoActions from './todos.actions';


export const todoFeatureKey = 'todo';

export interface TodosState {
  todos: Todo[]
}

export const todosInitialState: TodosState = {
  todos: [
      new Todo('test1'),
      new Todo('test2'),
      new Todo('test3')
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

function editTodo(state: any, props: todoActions.EditTodoPayload) {
  const {todo, text} = props;
  const todoIndex = state.todos.findIndex((item: Todo) => item.id === todo.id);
  
  const clonedObject = Object.assign({}, todo);
  clonedObject.text = text;

  const todos = [...state.todos];
  todos[todoIndex] = clonedObject;

  return {
    ...state,
    todos: [
      ...todos,
    ]
  }
}

function deleteTodo(state: any, todo: Todo) {
  const todoIndex = state.todos.findIndex((item: Todo) => item.id === todo.id);

  const todos = [...state.todos];
  todos.splice(todoIndex, 1);

  return {
    ...state, 
    todos: [
      ...todos
    ]
  };
};

function toggleCompleted(state: any, todo: Todo) {
  const todoIndex = state.todos.findIndex((item: Todo) => item.id === todo.id);
  
  const clonedObject = Object.assign({}, todo);
  clonedObject.isCompleted = !todo.isCompleted;

  const todos = [...state.todos];
  todos[todoIndex] = clonedObject;

  return {
    ...state,
    todos: [
      ...todos,
    ]
  }
}

export const todosReducer = createReducer(
  todosInitialState,
  on(todoActions.addTodo, addTodo),
  on(todoActions.editTodo, editTodo),
  on(todoActions.deleteTodo, deleteTodo),
  on(todoActions.toggleCompleted, toggleCompleted)
);
