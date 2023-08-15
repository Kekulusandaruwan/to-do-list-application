import { Component } from '@angular/core';
import {Task} from "../dto/task";

@Component({
  selector: 'app-task-tab',
  templateUrl: './task-tab.component.html',
  styleUrls: ['./task-tab.component.css']
})
export class TaskTabComponent {
  i:number=0;


  taskList:Array<Task>=[];
  addTask(description: HTMLInputElement){
  if(!description.value.trim()){
    description.focus();
    alert('Please Fill The Description to Save')
    return;
  }
  this.i=this.i+1;
  this.taskList.push(new Task(this.i,description.value,'INCOMPLETE'));
  description.value='';
  description.focus();
  }

  deleteTask(task: Task){



  }

  edit(task: Task, text: HTMLInputElement){
  text.value=task.description;
  text.focus();

  }

}
