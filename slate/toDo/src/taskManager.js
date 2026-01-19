import { Task } from "./domain.js";

export class TaskManager {
  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  addTask(title) {
    const task = new Task(title);
    this.taskRepository.save(task);
  }

  getTasks() {
    return this.taskRepository.getAll();
  }

  markTaskDone(index) {
    const task = this.taskRepository.getByIndex(index);
    if (!task) throw new Error("Task not found");
    task.markDone();
  }

  removeTask(index) {
    this.taskRepository.remove(index);
  }
}
