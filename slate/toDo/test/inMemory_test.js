import { assertEquals} from "jsr:@std/assert";
import { InMemoryTaskRepository } from "../src/inMemoryTask.js";

Deno.test("Save and retrieve tasks", () => {
  const repo = new InMemoryTaskRepository();
  repo.save({ title: "Task 1", done: false });
  repo.save({ title: "Task 2", done: true });
  const tasks = repo.getAll();
  assertEquals(tasks.length, 2);
});

Deno.test("Get task by index", () => {
  const repo = new InMemoryTaskRepository();
  repo.save({ title: "Task 1", done: false });
  const task = repo.getByIndex(0);
  assertEquals(task.title, "Task 1");
  assertEquals(task.done, false);
});

Deno.test("Remove a task", () => {
  const repo = new InMemoryTaskRepository();
  repo.save({ title: "Task 1", done: false });
  repo.save({ title: "Task 2", done: false });
  repo.remove(0);
  const tasks = repo.getAll();
  assertEquals(tasks[0].title, "Task 2");
});

Deno.test("Removing task with invalid index does not crash", () => {
  const repo = new InMemoryTaskRepository();
  repo.save({ title: "Task 1", done: false });
  repo.remove(5);
  const tasks = repo.getAll();
  assertEquals(tasks.length, 1);
  assertEquals(tasks[0].title, "Task 1");
});
