import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  public todoText = '';
  public todoList = [
    {id: 1, text: 'test1'},
    {id: 2, text: 'test2'},
    {id: 3, text: 'test3'}
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
