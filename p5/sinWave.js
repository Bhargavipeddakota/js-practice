let angle = 0;
let sinWave;

function setup() {
  createCanvas(600, 500);
  angleMode(DEGREES);
  noFill();

  sinWave = new SinWave();
}

function draw() {
  background(255);
  sinWave.display();
  angle++;
}

class SinWave {
  constructor() {
    this.noiseScale = 10;
  }

  display() {
    beginShape();
    stroke(20);
    strokeWeight(3);
    for (let x = 0; x <= width; x++) {
      let y = this.calculateY(x);
      vertex(x, y);
    }
    endShape();
  }

  calculateY(x) {
    return noise(x) * this.noiseScale + map(sin(x+angle)*0.43, -1, 1, 100, height-100 )
  }
}
