import { createAction, props } from '@ngrx/store';
import Todo from '../todo.model';

export const loadTodos = createAction(
  '[Todo] Load Todos'
);

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<Todo>()
);

export const deleteTodo = createAction(
  '[Todo] Delete Todo',
  props<Todo>()
);

export const toggleCompleted = createAction(
  '[Todo] Toggle Completed',
  props<Todo>()
);



