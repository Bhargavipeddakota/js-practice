function setup() {
  createCanvas(400, 400);
}
let v1;
let rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
function draw() {
 // background(255);
  translate(width/2,height/2)
  v1 = p5.Vector.random2D();
  v1.mult(100)
 stroke(rainbow[frameCount % rainbow.length]);
  line(0,0,v1.x,v1.y)
}
// function draw() {
//  // background(255);
//   translate(width/2,height/2)
//   // v1 = p5.Vector.random2D();
//   v1 = createVector(sin(random(0,360)),cos(random(0,360)))
//   v1.mult(150)
//  stroke(rainbow[frameCount % rainbow.length]);
//   line(0,0,v1.x,v1.y)
// }