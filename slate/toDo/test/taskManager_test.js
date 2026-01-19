import { assertEquals, assert} from "jsr:@std/assert";
import { TaskManager } from "../src/TaskManager.js";
import { InMemoryTaskRepository } from "../src/inMemoryTask.js";

Deno.test("Add a task", () => {
  const repo = new InMemoryTaskRepository();
  const manager = new TaskManager(repo);
  manager.addTask("New Task");
  const tasks = manager.getTasks();
  assertEquals(tasks[0].title, "New Task");
});

Deno.test("Mark task done", () => {
  const repo = new InMemoryTaskRepository();
  const manager = new TaskManager(repo);
  manager.addTask("Task 1");
  manager.markTaskDone(0);
  const tasks = manager.getTasks();
  assert(tasks[0].done);
});

Deno.test("Remove task", () => {
  const repo = new InMemoryTaskRepository();
  const manager = new TaskManager(repo);
  manager.addTask("Task 1");
  manager.addTask("Task 2");
  manager.removeTask(0);
  const tasks = manager.getTasks();
  assertEquals(tasks[0].title, "Task 2");
});
