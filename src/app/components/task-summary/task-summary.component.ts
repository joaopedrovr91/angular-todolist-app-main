import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-task-summary',
  templateUrl: './task-summary.component.html',
  styleUrls: ['./task-summary.component.css'],
})
export class TaskSummaryComponent {
  @Input() tasks: { description: string; completed: boolean }[]=[];
  @Output() clearCompleted = new EventEmitter<void>();

  constructor(private taskService: TaskService) {}

  get completedTasksCount(): number {
    return 1;
  }

  onClearCompleted(): void {
    console.log("Oi")
  }
}
