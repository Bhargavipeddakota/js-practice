import { rawlist, input } from "@inquirer/prompts";

export const showMenu = async () =>
  rawlist({
    message: "Select a TASK",
    choices: [
      { name: "ADD TASK", value: "addTask" },
      { name: "TASK DONE", value: "taskDone" },
      { name: "VIEW TASK", value: "viewTask" },
      { name: "REMOVE TASK", value: "removeTask" },
      { name: "EXIT", value: "exit" },
    ],
  });

export const askTitle = () =>
  input({
    message: "Enter task title",
    validate: (v) => v.trim() !== "" || "Title cannot be empty",
  });

export const chooseTask = (tasks, message) =>
  rawlist({
    message,
    choices: tasks.map((t, i) => ({
      name: `[${t.done ? "✔" : " "}] ${t.title}`,
      value: i,
    })),
  });
