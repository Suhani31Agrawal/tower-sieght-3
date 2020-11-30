class Hexagon{
  constructor(x,y,r) {
    var options = {
      isStatic:false,
      restitution:1,
        friction:0,
        density:0.8
    }
    this.image=loadImage("polygon.png")
    this.body = Bodies.circle(x,y,r,options);
    this.r = r;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y)
    imageMode(CENTER);
    fill("yellow");
    image(this.image,0, 0, this.r*2, this.r*2);
    pop();
  }
};