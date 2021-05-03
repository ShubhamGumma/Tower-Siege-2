class Block{
  constructor(x, y, width, height) {
    var options = {
      'restitution':0.8,
      'friction':0.5,
      'density':0.8
    }
    this.visibility = 255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("block.png");
    World.add(world, this.body);
  }
display(){
  console.log(this.body.speed);
  if(this.body.speed>4){
    World.remove(world,this.body);
    push();
    this.visibility = this.visibility-5;
    tint(255,this.visibility);
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    pop();
  }
  else{
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
  }
}
};