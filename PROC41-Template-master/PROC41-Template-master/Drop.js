class Drop{

    constructor(x,y,width,height){
        var options={
        isStatic: false,
        friction: 0.1,
        }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){

    if(this.rain.position.y > height){

      Matter.body.setPosition(this.rain, {x:(0, 400), y:(0, 400)})
    }
    var pos =this.body.position;
    ellipseMode(CENTER);
    fill("lue");
    ellipse(0, 0, this.width, this.height);
  }
};
