import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {
  filtro = "todas";
  @Output() filterChanged = new EventEmitter<string>();
  onFilterChange(event: Event){
    this.filtro = (event.target as HTMLSelectElement).value;
    this.filterChanged.emit(this.filtro);
  }
}
