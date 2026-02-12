let walkers = [];
let petals = 8;
let count = 700;

class Walker {
  constructor(index) {
    this.index = index;
    this.t = 0;
    this.a = 150;
    this.colorHue = random(360);
  }

  step() {
    this.t += 0.02;
    this.r = this.a * sin(petals * this.t);

    this.x = this.r * cos(this.t);
    this.y = this.r * sin(this.t);
  }

  show() {
    stroke(this.colorHue, 80, 90, 80);
    strokeWeight(2);
    point(this.x, this.y);
  }
}

function setup() {
  createCanvas(500, 500);
  background(10);

  for (let i = 0; i < count; i++) {
    walkers.push(new Walker(i));
  }
}

function draw() {
  translate(width / 2, height / 2);

  for (let w of walkers) {
    w.step();
    w.show();
  }
}
