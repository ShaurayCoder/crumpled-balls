class Paper {
  constructor(x, y, radius) {
    var options ={
        isStatic:false,
        'resitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    this.radius=radius
    this.body = Bodies.circle(x, y, radius, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
fill("yellow");
    ellipseMode(RADIUS);  
    circle(this.body.position.x, this.body.position.y, this.radius);
  

}
}
