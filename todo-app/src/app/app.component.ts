import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: { text: string; completada: boolean }[] = [];
  filtro = "todas";
  addTask(task: string){
    this.tasks.push({ text: task, completada: false });
  }
  onTaskCompleted(event:{ index: number, completada: boolean}){
    this.tasks[event.index].completada = event.completada;
  }
  onFilterChange(filter: string){
    this.filtro = filter;
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
