import { Component, OnInit } from '@angular/core';

import Todo from '../todo.interface';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  public todoText = '';
  public todoList: Todo[] = [];

  constructor(public todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.getTodos().subscribe((state) => {
      this.todoList = state.todos;
    });
  }

}
