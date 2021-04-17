import { createAction, props } from '@ngrx/store';
import Todo from '../todo.interface';

export const loadTodos = createAction(
  '[Todo] Load Todos'
);

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<Todo>()
);




