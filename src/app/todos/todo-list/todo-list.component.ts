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
  public todoText: string = '';
  public selectedItem: Todo|null = null;
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

    if (this.selectedItem === null) {
      this.todosService.addTodo(new Todo(ngForm.controls['todoText'].value));
    } else {
      
      this.todosService.editTodo({
        todo: this.selectedItem, 
        text: ngForm.controls['todoText'].value
      });
      this.selectedItem = null;
    }

    ngForm.form.get('todoText')?.setValue(null);
  }

  onDeleteTodoItem(todo: Todo) {
    this.todosService.deleteTodo(todo);
  }

  onToggleTodoItem(todo: Todo) {
    this.todosService.toggleTodo(todo);
  }

  onEditItem(todo: Todo) {
    this.selectedItem = todo;
    this.todoText = this.selectedItem.text;
  }

}
