import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list/list.component';
// declare var $ ;
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  // @ViewChild('dataTable') table: ElementRef;
  // dataTable: any;
  todo: Todo
  id : number
  constructor(
    private todoService: TodoDataService,
   
    private router: Router
  ) { }

  ngOnInit(
   
   )
   {
  //  this.dataTable = $(this.table.nativeElement);
  //  this.dataTable.dataTable();
  }
  createSale() {
    if(this.id === -1){
      this.todoService.createTodo('obed',  this.todo)
    .subscribe(
      data => {
        console.log(data)
    //    this.router.navigate(['list'])
      }
    )

    } else 
    this.todoService.updateTodo('obed', this.id, this.todo)
    .subscribe(
      data => {
        console.log(data)
       // this.router.navigate(['list'])
      }
    )
  }

}
