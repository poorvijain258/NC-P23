class bob {
    constructor(x,y){
    var options = {
        
    isStatic:false,

    restitution:0,
    friction:0.2,
    density:1.2
}
    this.body = Bodies.circle(x,y,options);
    World.add(this.body,world);
}
display(){
push();
ellipseMode(RADIUS);
ellipse(this.body.position.x,this.body.position.y,10,10);
pop();
}
}