import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  public ToDoList:any[]=[];
  public showMessage:string="";

  
  constructor() { }

  ngOnInit(): void {
    this.ToDoList=[
      {
      id:1,
      name:"Akash",
      lastname:"Gupta"
     },
     {
      id:2,
      name:"Tony",
      lastname:"Stark"
     }
  ]
  }

  toDoList(name:string,lastname:string){
    if(name!="" && lastname!="")
    {
      
      this.showMessage="";
      this.ToDoList.push({id:this.ToDoList.length+1,name:name,lastname:lastname});
      console.log(this.ToDoList);
    }else{
      this.showMessage="--please fill name--";
    }

  }

  toDoListRemove(id:number){
   this.ToDoList=this.ToDoList.filter(item=>item.id!==id);
  }
}
