// task.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task!: { description: string; completed: boolean };
  @Output() cancel = new EventEmitter<void>();

  constructor(private taskService: TaskService) {}

  onCancel(): void {
    console.log("Oi")
  }
}
