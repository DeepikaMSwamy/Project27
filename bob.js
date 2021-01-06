class Bob{
    constructor(x, y,radius) {
      var options = {
          isStatic:false,
          'restitution':0,
          'friction':0,
          'density':1.2,
      }
      this.body = Bodies.circle(x, y,radius/2, options);
      this.r=radius;
  
  
      World.add(world, this.body);
    }
    display(){
      push();
     
      translate(this.body.position.x, this.body.position.y);
      fill("red")
      ellipseMode(CENTER)
      ellipse(0,0,this.r)

      pop();
  
    }
  };