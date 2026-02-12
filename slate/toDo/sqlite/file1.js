export class Todo {
  constructor({ id, name }) {
    this.id = id;       // unique todo id
    this.name = name;   // todo name
  }
}


export class SqliteTodoRepository {
  constructor(db) {
    this.db = db;
    this.db.query(`
      CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
      )
    `);
  }

  add(name) {
    if (!name || !name.trim()) throw new Error("Todo name is required");

    this.db.query(
      "INSERT INTO todos (name) VALUES (?)",
      [name.trim()]
    );

    const id = this.db.query("SELECT last_insert_rowid()")[0][0];

    return new Todo({ id, name: name.trim() });
  }

  getAll() {
    const rows = this.db.query("SELECT id, name FROM todos");
    return rows.map(([id, name]) => new Todo({ id, name }));
  }

  getById(id) {
    const row = this.db.query("SELECT id, name FROM todos WHERE id = ?", [id])[0];
    if (!row) return null;
    const [todoId, name] = row;
    return new Todo({ id: todoId, name });
  }

  remove(id) {
    this.db.query("DELETE FROM todos WHERE id = ?", [id]);
  }
}
