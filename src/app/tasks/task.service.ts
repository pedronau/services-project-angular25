import { Injectable, signal } from "@angular/core";
import { Task } from "./task.model";

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = signal<Task[]>([]);

  addTask(taskData: { title: string; description: string }) {
    this.tasks.update((oldTasks) => [...oldTasks, ])
  }
}
