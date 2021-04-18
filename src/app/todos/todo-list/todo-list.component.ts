import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { uniqueId } from "lodash";

import Todo from '../todo.interface';
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

    this.todosService.addTodo({
      id: uniqueId(),
      text: ngForm.controls['todoText'].value,
      isCompleted: false
    });

    ngForm.form.get('todoText')?.setValue(null);
  }

  onDeleteTodoItem(todo: Todo) {
    this.todosService.deleteTodo(todo);
  }

}
