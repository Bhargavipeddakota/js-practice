export class InMemoryTaskRepository {
  constructor() {
    this.tasks = [];
  }

  save(task) {
    this.tasks.push(task);
  }

  getAll() {
    return this.tasks;
  }

  getByIndex(index) {
    return this.tasks[index];
  }

  remove(index) {
    this.tasks.splice(index, 1);
  }
}
