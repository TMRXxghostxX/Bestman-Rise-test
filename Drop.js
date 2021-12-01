class drop{
    constructor(x,y){
        var options={
        'friction':0.01,
        'restitution':0.1,
        }
    this.drop = Bodies.circle(x,y,5,options);
    World.add(world,this.body);
    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
    }
    showDrops()
    {
        var pos=this.body.position;
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r,this.r);
    }
}
