import { createAction, props } from '@ngrx/store';
import Todo from '../todo.model';

export interface TodosActionsPayload {
  todo: Todo
}

export interface EditTodoPayload {
  todo: Todo,
  text: string
}

export const loadTodos = createAction(
  '[Todo] Load Todos'
);

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<TodosActionsPayload>()
);

export const editTodo = createAction(
  '[Todo] Edit Todo',
  props<EditTodoPayload>()
);

export const deleteTodo = createAction(
  '[Todo] Delete Todo',
  props<TodosActionsPayload>()
);

export const toggleCompleted = createAction(
  '[Todo] Toggle Completed',
  props<TodosActionsPayload>()
);



