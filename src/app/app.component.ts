import { Component, ViewEncapsulation } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskService],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'angular-todolist-app-main';

  constructor(private taskService: TaskService) {}

  get tasks() {
    return this.taskService.tasks;
  }

  cancelTask(index: number): void {
    // Implemente a lógica de cancelamento da tarefa aqui
  }

  clearCompleted(): void {
    this.taskService.tasks = this.taskService.tasks.filter(task => !task.completed);
  }
}
