let pos;
class Mover {
  constructor(x,y){
    this.v1 = createVector(x,y);
    this.vel= createVector(1,1)
  }
  update(){
 this.v1.add(this.vel)
  }
}
function setup() {
  createCanvas(400, 400);
  pos = new Mover(50,50);
}
function draw() {
  background(255)
  fill(255,200)
  strokeWeight(1);
  circle(pos.v1.x,pos.v1.y,15)
  pos.update();
}