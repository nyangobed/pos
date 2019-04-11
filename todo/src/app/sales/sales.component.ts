import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Router } from '@angular/router';
import { REMOVE_ALL_TODOS } from '../actionsredux';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actionsredux';
import { ITodo } from '../todoredux';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  @select() todos;
  @select() lastUpdate;
  model: ITodo = {
    id: 0,
    serial:"",
    amount: "",
    quantity:"",
    isCompleted: false 
  };
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.dtOptions= {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }
  clearTodos() {
    this.ngRedux.dispatch({type: REMOVE_ALL_TODOS});
  }
  onSubmit() {
    this.ngRedux.dispatch({type: ADD_TODO, todo: this.model});
  }
  // toggleTodo(todo) {
  //   this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  // }
  removeTodo(todo) {
    this.ngRedux.dispatch({type: REMOVE_TODO, id: todo.id });
  }

}
