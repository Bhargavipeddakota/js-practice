import { showMenu } from "./src/menu.js";
import { TaskManager } from "./src/TaskManager.js";
import { InMemoryTaskRepository } from "./src/inMemoryTask.js";
import { createController } from "./src/controller.js";

const taskManager = new TaskManager(new InMemoryTaskRepository());
const controller = createController(taskManager);

let action = "";

while (action !== "exit") {
  console.log("---> TASK MANAGER <---\n");
  action = await showMenu();
  await controller[action]();
}

