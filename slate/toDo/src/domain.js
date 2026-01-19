export class Task {
  constructor(title) {
    this.title = title;
    this.done = false;
  }

  markDone() {
    this.done = true;
  }
}
