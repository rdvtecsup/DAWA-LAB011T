import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  
  @Input() tasks: { text: string; completada: boolean }[] = [];
  @Output() taskCompleted = new EventEmitter<{ index:number, completada: boolean}>();
  
  filtro = "todas";

  onTaskCompleted(task:{text: string, completada: boolean}){
    const index = this.tasks.findIndex(t => t === task);
    this.taskCompleted.emit({index, completada: task.completada});
  }
  get filteredTasks(){
    if (this.filtro === "todas"){
      return this.tasks;
    } else if (this.filtro === "completadas"){
      return this.tasks.filter(task => task.completada);
    } else if (this.filtro === "noCompletadas"){
      return this.tasks.filter(task => !task.completada);
    }
    return this.tasks;
  }
}
