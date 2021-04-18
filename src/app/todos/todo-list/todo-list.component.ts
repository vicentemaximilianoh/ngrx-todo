import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import Todo from '../todo.model';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  public todoList: Todo[] = [];

  constructor(public todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.getTodos().subscribe((state) => {
      this.todoList = state.todos;
    });
  }

  onAddTodoItem(ngForm: NgForm) {
    if (!ngForm.form.valid) {
      return
    }

    this.todosService.addTodo(new Todo(ngForm.controls['todoText'].value));

    ngForm.form.get('todoText')?.setValue(null);
  }

  onDeleteTodoItem(todo: Todo) {
    this.todosService.deleteTodo(todo);
  }

  onToggleTodoItem(todo: Todo) {
    this.todosService.toggleTodo(todo);
  }

}
