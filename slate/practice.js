import { input } from "@inquirer/prompts";
while (true) {
  const data = await input({ message: "enter something" });
  if (data === "done") {
    break;
  }
}
console.log(data);
