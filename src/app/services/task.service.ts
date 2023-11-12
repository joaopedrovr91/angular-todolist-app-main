import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = [
    { description: 'Jog around the park 3x', completed: false },
    { description: '10 minutes meditation', completed: false },
    { description: 'Read for 1 hour', completed: false },
    { description: 'Pick up groceries', completed: false },
    { description: 'Complete Todo App on Frontend Mentor', completed: false },
  ];

  getCompletedTasksCount(): number {
    return 1;
  }

  clearCompletedTasks(): void {
    console.log("deu certo")
  }

  cancelTask(index: number): void {
    console.log("deu certo")
  }
}
