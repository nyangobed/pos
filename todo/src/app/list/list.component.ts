import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Router } from '@angular/router';
export class Todo{
  constructor(
    public id: number,
    public serial: number,
    public make: String,
    public owner: String,
    public targetDate: Date
  ){

  }
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
todos =[]
Message : string
  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }
  
  ngOnInit() {
    this.dtOptions= {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  
   this.refreshTodos()
    }
  refreshTodos(){
    this.todoService.retrieveAllTodos('obed').subscribe(
      response => {
        console.log(response);
        this.todos=response;
      }
    )
  }
  deleteTodo(id){
    console.log(`delet todo ${id}`)
    this.todoService.deleteTodo('obed', id).subscribe(
       response => {
         console.log(response);
         this.Message =`Delete of Todo ${id} Succesful`
         this.refreshTodos();
       }
    )
  }
  updateTodo(id){
    console.log(`update ${id}`)
    this.router.navigate(['todo', id])
  }

  addTodo(){
    this.router.navigate(['todo', -1])
  }

}
