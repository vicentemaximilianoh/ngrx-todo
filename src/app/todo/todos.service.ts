import { Injectable } from '@angular/core';
import Todo from './todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todos: Todo[] = [
    {id: 1, text: 'test1', isCompleted: true},
    {id: 2, text: 'test2', isCompleted: false},
    {id: 3, text: 'test3', isCompleted: false}
  ];

  constructor() { }
  
  getTodos(): Promise<Todo[]> {
    return new Promise((resolve) => {
      resolve(this.todos);
    });
  }
}
