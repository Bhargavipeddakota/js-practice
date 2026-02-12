export class Task {
  constructor({ task_id, todoId, title, done = false }) {
    this.task_id = task_id; // unique id
    this.todoId = todoId;   // id of the todo list it belongs to
    this.title = title;     // task description
    this.done = done;       // completion status
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  toggle() {
    this.done = !this.done;
  }
}


export class SqliteTaskRepository {
  constructor(db) {
    this.db = db;
    this.db.query(`
      CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        todoId INTEGER NOT NULL,
        title TEXT NOT NULL,
        done INTEGER DEFAULT 0,
        FOREIGN KEY(todoId) REFERENCES todos(id) ON DELETE CASCADE
      )
    `);
  }

  add(todoId, title) {
    if (!title || !title.trim()) throw new Error("Task title is required");

    this.db.query(
      "INSERT INTO tasks (todoId, title, done) VALUES (?, ?, ?)",
      [todoId, title.trim(), 0]
    );

    const id = this.db.query("SELECT last_insert_rowid()")[0][0];

    return new Task({
      task_id: id,
      todoId,
      title: title.trim(),
      done: false,
    });
  }

  getAllTasks() {
    const rows = this.db.query("SELECT id, todoId, title, done FROM tasks");
    return rows.map(
      ([task_id, todoId, title, done]) =>
        new Task({ task_id, todoId, title, done: done === 1 })
    );
  }

  getById(taskId) {
    const row = this.db.query(
      "SELECT id, todoId, title, done FROM tasks WHERE id = ?",
      [taskId]
    )[0];
    if (!row) return null;
    const [task_id, todoId, title, done] = row;
    return new Task({ task_id, todoId, title, done: done === 1 });
  }

  getByTodoId(todoId) {
    const rows = this.db.query(
      "SELECT id, todoId, title, done FROM tasks WHERE todoId = ?",
      [todoId]
    );
    return rows.map(
      ([task_id, todoId, title, done]) =>
        new Task({ task_id, todoId, title, done: done === 1 })
    );
  }

  removeTask(taskId) {
    this.db.query("DELETE FROM tasks WHERE id = ?", [taskId]);
  }
}
