import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Action, StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import IAppStore from './app-store.interface';
import { AppComponent } from './app.component';
import {todosReducer} from './todos/store/todos.reducer';
import { TodosModule } from './todos/todos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot<IAppStore, Action>({
      todos: todosReducer
    }),
    AppRoutingModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
