class RedBall{

constructor(x,y,r){
var something={
    restitution :1
}

this.body =Bodies.circle(x,y,r,something);
World.add(world,this.body)
this.r=r
}

display(){
 fill("blue")
 ellipse(this.body.position.x,this.body.position.y,this.r)
}

}