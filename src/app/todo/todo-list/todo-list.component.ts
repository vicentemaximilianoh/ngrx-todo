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
  public todoList: Promise<Todo[]>|null = null;

  constructor(public todosService: TodosService) {}

  ngOnInit(): void {
    this.todoList = this.todosService.getTodos();
  }

}
