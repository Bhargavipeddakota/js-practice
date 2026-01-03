let pos;
class Vector {
  constructor(x, y) {
    this.v1 = createVector(x, y);
  }
  update() {
    this.v1.x++;
    this.v1.y++;
  }
}
function setup() {
  createCanvas(400, 400);
  pos = new Vector(0, 50);
}
function draw() {
  background(255);
  fill(0);
  strokeWeight(4);
  point(pos.v1.x, pos.v1.y);
  pos.update();
}
