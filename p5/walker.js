let walkers = [];

class Walker {
  constructor(angle) {
    this.pos = createVector(0, 0);
    this.angle = angle;
  }

  step() {
    let n = noise(0.003);
    let turn = map(n, 0, 1, -0.05, 0.05);
    this.angle += turn;

    let dir = p5.Vector.fromAngle(this.angle);
    dir.mult(1.8);
    this.pos.add(dir);

  }

  show() {
    let d = this.pos.mag();
    stroke(hue, 80, 90, alpha);
    point(this.pos.x, this.pos.y);
  }
}

function setup() {
  createCanvas(500, 500);
  background(10);

  let count = 50;

  for (let i = 0; i < count; i++) {
    let angle = map(i, 0, count, 0, TWO_PI);
    walkers.push(new Walker(angle));
  }
}

function draw() {
  translate(width / 2, height / 2);

  for (let w of walkers) {
      w.step();
      w.show();
  }
}

