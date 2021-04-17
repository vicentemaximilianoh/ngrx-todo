import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import IAppStore from '../app-store.interface';
import ITodoState from './store/todos-state.interface';
import * as todoActions from './store/todos.actions';
import Todo from './todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private store: Store<IAppStore>) {}
  
  getTodos(): Observable<ITodoState> {
    return this.store.select('todos');
  }

  addTodo(todo: Todo): void {
    this.store.dispatch(todoActions.addTodo(todo))
  }
}