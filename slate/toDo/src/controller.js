import { askTitle, chooseTask } from "../src/menu.js";

const addTaskOp = async (taskManager) => {
  console.clear();
  const title = await askTitle();
  taskManager.addTask(title);
};

const viewTaskOp = (taskManager) => {
  console.clear();
  const tasks = taskManager.getTasks();
  if (!tasks.length) {
    console.log("No tasks available.");
    return;
  }
  console.log("=== TASKS ===\n");
  tasks.forEach((t, i) =>
    console.log(`${i + 1}. [${t.done ? "✔" : " "}] ${t.title}`)
  );
  prompt("Press Enter to continue....");
  console.clear();
};


const taskDoneOp = async (taskManager) => {
  console.clear();
  const tasks = taskManager.getTasks();
  if (!tasks.length) {
    console.log("No tasks to mark as done.");
    return;
  }
  const index = await chooseTask(tasks, "Mark task done");
  taskManager.markTaskDone(index);
};

const removeTaskOp = async (taskManager) => {
  console.clear();
  const tasks = taskManager.getTasks();
  if (!tasks.length) {
    console.log("No tasks to remove.");
    return;
  }
  const index = await chooseTask(tasks, "Remove task");
  taskManager.removeTask(index);
};

export const createController = (taskManager) => ({
  addTask: () => addTaskOp(taskManager),
  viewTask: () => viewTaskOp(taskManager),
  taskDone: () => taskDoneOp(taskManager),
  removeTask: () => removeTaskOp(taskManager),
  exit: async () => "exit",
});
